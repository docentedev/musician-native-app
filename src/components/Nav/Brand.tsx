import { Text, StyleSheet } from 'react-native'
import { useAuth } from "../../contexts/AuthContext"
import Colors from "../../config/Colors"
import Sizes from "../../config/Sizes"

const Brand = ({ title }: { title: string}) => {
    const auth = useAuth()
    return (
        <Text style={auth.data.isLogin ? styles.brandLogin : styles.brand}>
            {title} {auth.data.isLogin && auth.data.token.username}
        </Text>
    );
}

const styles = StyleSheet.create({
    brandLogin: {
        color: Colors.snow,
        flex: 1,
        fontSize: 15,
        paddingLeft: Sizes.x4,
        marginTop: Sizes.x0_5,
    },
    brand: {
        color: Colors.snow,
        flex: 1,
        fontSize: 15,
        paddingLeft: 0,
        marginTop: Sizes.x0_5,
    }
})

export default Brand
