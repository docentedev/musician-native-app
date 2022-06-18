import { useNavigate } from 'react-router-native';
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import Base64 from './Base64';

function parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(Base64.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const model = JSON.parse(jsonPayload)
    model.initData = new Date(Number(model.iat + '000'))
    return model
}

const initialState: any = {
    data: {
        token: {
            jwt: ''
        },
        isLogin: null
    },
    setData: (_d: { key: string, value: any }) => { }
}

const AuthCtx = createContext(initialState)

const AuthProvider = ({ children }: any) => {
    const [data, setData] = useState(initialState.data)

    return (
        <AuthCtx.Provider value={{
            data,
            setData: (newData: { key: string, value: string }) => {
                if (newData.key === 'token') {
                    const token = parseJwt(newData.value)
                    token.jwt = newData.value
                    setData({
                        ...data,
                        isLogin: true,
                        [newData.key]: token,
                    })
                } else if (newData.key === 'logout') {
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
