import { useNavigate } from 'react-router-native';
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import Base64 from './Base64';

const save = async (key: string, value: any) => {
    await SecureStore.setItemAsync(key, value);
}

const deleteValueFor = async (key: string) => {
    await SecureStore.deleteItemAsync(key);
}

const getValueFor = async (key: string) => {
    let result = await SecureStore.getItemAsync(key);
    return result
}

const parseJwt = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(Base64.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const model = JSON.parse(jsonPayload)
    model.initData = new Date(Number(model.iat + '000'))
    return model
}

const initialState: any = {
    data: {
        token: {
            id: '',
            username: '',
            jwt: ''
        },
        isLogin: null
    },
    setData: async (_d: { key: string, value: any }) => { }
}

const AuthCtx = createContext(initialState)

const AuthProvider = ({ children }: any) => {
    const [data, setData] = useState(initialState.data)

    useEffect(() => {
        (async () => {
            const lsData = await getValueFor('token')
            let newData = {
                token: {
                    jwt: ''
                },
                isLogin: false
            }
            if (lsData) {
                newData.token = JSON.parse(lsData)
                newData.isLogin = true
            }
            console.log('Auth Provider: ', newData)
            setData(newData)
        })()
    }, [])

    return (
        <AuthCtx.Provider value={{
            data,
            setData: async (newData: { key: string, value: string }) => {
                if (newData.key === 'token') {
                    const token = parseJwt(newData.value)
                    token.jwt = newData.value
                    await save('token', JSON.stringify(token))
                    setData({
                        ...data,
                        isLogin: true,
                        [newData.key]: token,
                    })
                } else if (newData.key === 'logout') {
                    await deleteValueFor('token')
                    setData({
                        ...data,
                        isLogin: false,
                        token: {
                            jwt: ''
                        }
                    })
                } else {
                    setData({
                        ...data,
                        [newData.key]: newData.value
                    })
                }
            }
        }}>
            {children}
        </AuthCtx.Provider>)
}

export const useIsAuth = () => {
    const navigate = useNavigate()
    const { data } = useContext(AuthCtx)
    const authCheck = useCallback(() => {
        if (data.isLogin === null) return
        if (!data.isLogin) navigate('/')
    }, [data, navigate])

    useEffect(() => {
        authCheck()
    }, [authCheck])
    return data.isLogin
}

export const useAuth = () => {
    const authData = useContext(AuthCtx)
    return authData
}

export default AuthProvider
