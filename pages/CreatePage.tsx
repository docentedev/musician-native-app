import { useContext } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Settings } from 'react-native-feather'

import Nav from '../components/Nav'
import { SidebarContext } from '../components/Sidebar'
import { useIsAuth } from '../contexts/AuthContext'
import Sizes from '../config/Sizes'
import Colors from '../config/Colors'

const CreatePage = () => {
    const sidebarContext = useContext(SidebarContext)

    const isLogin = useIsAuth()

    return isLogin ? (
        <View style={styles.container}>
            <Nav title="Create Musician" />
            <ScrollView style={styles.mainContainer}>
                <RectButton onPress={() => sidebarContext.handleOpen()}>
                    <Settings width={Sizes.x4} color={Colors.turquoise} />
                </RectButton>
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