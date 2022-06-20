import React from "react"
import { View, StyleSheet, TouchableHighlight } from "react-native"
import { Link, useLocation } from "react-router-native"
import { Home, Plus, LogIn, LogOut } from 'react-native-feather'
import Colors from "../../config/Colors"
import Sizes from "../../config/Sizes"
import { useAuth } from "../../contexts/AuthContext"
import useLogin from '../../hooks/useLogin'
import Brand from "./Brand"

const getActive = (location: any) => (path: string, active: any, inactive: any) => {
    return location.pathname === path ? active : inactive
}

const Nav = ({ title }: { title: string }) => {
    const location = useLocation()
    const isActive = getActive(location)
    const auth = useAuth()
    const login = useLogin()

    const handleLogout = async () => {
        await auth.setData({ key: 'logout', value: '' })
        login.goTo('/')
    }
    return (
        <View style={styles.container}>
            <Brand title={title} />
            <Link to="/" style={[
                styles.link,
                isActive('/', styles.ative, styles.inactive)
            ]}>
                <Home
                    width={Sizes.x2}
                    color={isActive('/', Colors.turquoise, Colors.snow)}
                />
            </Link>
            {auth.data.isLogin && <Link style={[
                styles.link,
                isActive('/create', styles.ative, styles.inactive)
            ]} to="/create">
                <Plus
                    width={Sizes.x2}
                    color={isActive('/create', Colors.turquoise, Colors.snow)}
                />
            </Link>}
            {auth.data.isLogin ? (
                <TouchableHighlight onPress={handleLogout} style={[
                    styles.link,
                    isActive('/login', styles.ative, styles.inactive)
                ]}>
                    <LogOut
                        width={Sizes.x2}
                        color={Colors.blodLight}
                    />
                </TouchableHighlight>
            ) : (<Link to="/login" style={[
                styles.link,
                isActive('/login', styles.ative, styles.inactive)
            ]}>
                <LogIn
                    width={Sizes.x2}
                    color={isActive('/login', Colors.turquoise, Colors.snow)}
                />
            </Link>)}
        </View>
    )
}

const styles = StyleSheet.create({
    link: {
        height: 28,
        width: 28,
        marginLeft: 4,
        backgroundColor: Colors.darkpurple,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inactive: {},
    ative: {
        color: Colors.turquoise,
    },
    container: {
        paddingHorizontal: 10,
        color: Colors.darkpurple,
        height: 30,
        backgroundColor: Colors.blodLight,
        textAlign: 'center',
        flexDirection: 'row',
        alignContent: 'center',
    },
})

export default Nav
