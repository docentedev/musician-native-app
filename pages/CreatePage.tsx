import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Nav from '../components/Nav'
import { useIsAuth } from '../contexts/AuthContext'

const CreatePage = () => {
    const isLogin = useIsAuth()
    return isLogin ? (
        <View style={styles.container}>
            <Nav title="Create Musician" />
            <ScrollView style={styles.mainContainer}>
                <Text style={styles.title}>Private Zone</Text>
            </ScrollView>
        </View>
    ) : (
        <View style={styles.container}>
            <Nav title="Create Musician" />
            <Text>Unauthenticated</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        padding: 10,
    },
    title: {
        color: '#000',
        fontSize: 20,
        height: 30,
        padding: 4,
        marginBottom: 5,
        backgroundColor: '#fff',
        textAlign: 'center',
    }
})

export default CreatePage