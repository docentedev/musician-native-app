import { useState } from "react"
import { useNavigate } from "react-router-native"
import apis from "../config/apis"

const useLogin = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleLogin = async ({ username, password }: any) => {
        setLoading(true)
        setError('')
        try {
            const response = await fetch(`${apis.auth}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })
            const data = await response.json()
            if (data.error) {
                setError(data.error)
            } else {
                setLoading(false)
                return data.token
            }
        } catch (err: any) {
            setError(err.message)
            setLoading(false)
            throw err
        }
    }

    const goTo = (path: string) => {
        navigate(path)
    }

    return { loading, error, handleLogin, goTo }
}

export default useLogin
