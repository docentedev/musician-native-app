import React, { useState } from 'react'
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
} from 'react-native'
import Nav from '../components/Nav'
import apis from '../config/apis'
import Colors from '../config/Colors'
import Sizes from '../config/Sizes'
import { useAuth } from '../contexts/AuthContext'

const useLogin = () => {
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
                console.log(data)
                setLoading(false)
                return data.token
            }
        } catch (err: any) {
            setError(err.message)
            setLoading(false)
            throw err
        }
    }

    return { loading, error, handleLogin }
}

const LoginPage = () => {
    const [account, setAccount] = useState({
        username: '',
        password: '',
    })
    const login = useLogin()
    const auth = useAuth()

    return login.loading ? (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    ) : (
        <View style={styles.container}>
            <Nav title="Login" />
            <ScrollView>
                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Username</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(username) => setAccount({ ...account, username })}
                            value={account.username}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(password) => setAccount({ ...account, password })}
                            value={account.password}
                            secureTextEntry={true}
                        />
                    </View>
                    <View>
                        <Text>
                            {auth.data.token.jwt}
                        </Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        color={Colors.snow}
                        title="Login"
                        onPress={async () => {
                            const data = await login.handleLogin(account)
                            if (data) {
                                auth.setData({ key: 'token', value: data })
                            }
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blodLight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        backgroundColor: Colors.turquoise,
        padding: Sizes.x3,
        marginTop: Sizes.x9,
        width: 300,
        maxWidth: 300,
        borderRadius: Sizes.x2,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 5,
        color: Colors.darkpurple,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.darkpurple,
        padding: 10,
        fontSize: 16,
        borderRadius: 5,
        backgroundColor: Colors.turquoise,
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
})

export default LoginPage