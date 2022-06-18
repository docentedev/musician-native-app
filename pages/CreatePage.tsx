import { StyleSheet, View } from 'react-native'
import Nav from '../components/Nav'

const CreatePage = () => {
    return (
        <View style={styles.container}>
            <Nav title="Create Musician" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default CreatePage