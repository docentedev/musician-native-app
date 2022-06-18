import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Link, useLocation } from "react-router-native"
import { Home, Plus, LogIn } from 'react-native-feather'
import Colors from "../config/Colors"
import Sizes from "../config/Sizes"

const getActive = (location: any) => (path: string, active: any, inactive: any) => {
    return location.pathname === path ? active : inactive
}

const Nav = ({ title }: { title: string }) => {
    const location = useLocation()
    const isActive = getActive(location)
    return (
        <View style={styles.container}>
            <Text style={styles.brand}>{title}</Text>
            <Link to="/">
                <View style={[
                    styles.link,
                    isActive('/', styles.ative, styles.inactive)
                ]}>
                    <Home
                        width={Sizes.x2}
                        color={isActive('/', Colors.turquoise, Colors.snow)}
                    />
                </View>
            </Link>
            <Link to="/create">
                <View style={[
                    styles.link,
                    isActive('/create', styles.ative, styles.inactive)
                ]}>
                    <Plus
                        width={Sizes.x2}
                        color={isActive('/create', Colors.turquoise, Colors.snow)}
                    />
                </View>
            </Link>
            <Link to="/login">
                <View style={[
                    styles.link,
                    isActive('/login', styles.ative, styles.inactive)
                ]}>
                    <LogIn
                        width={Sizes.x2}
                        color={isActive('/login', Colors.turquoise, Colors.snow)}
                    />
                </View>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    brand: {
        color: Colors.snow,
        flex: 1,
        fontSize: 15,
        marginTop: Sizes.x0_5,
    },
    link: {
        height: 28,
        width: 28,
        marginHorizontal: 2,
        backgroundColor: Colors.darkpurple,
        borderRadius: 20,
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
    }
})

export default Nav
