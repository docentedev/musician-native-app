import { View, Text, StyleSheet, SafeAreaView, TouchableHighlight } from 'react-native'
import { Menu as IconMenu, Settings, User, Edit2, Home, Smile, MessageCircle } from 'react-native-feather'
import Colors from '../../config/Colors'
import { useAuth } from '../../contexts/AuthContext'

const Menu = ({ onToggle }: any) => {
    const auth = useAuth()
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.icon}>
                    <TouchableHighlight
                        style={styles.iconButton}
                        onPress={() => onToggle()}
                    >
                        <IconMenu {...styles.iconButtonGraph} />
                    </TouchableHighlight>
                </View>
                <View style={styles.profileContainer}>
                    <View style={styles.profile}>
                        <View style={styles.profilePic}></View>
                        <View>
                            <Text style={styles.profileTitle}>{auth.data.token.username}</Text>
                            <Text style={styles.profileSubtitle}>{auth.data.token.iat}</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            <SafeAreaView style={styles.itemContaner}>
                <View style={styles.menu}>
                    <TouchableHighlight style={styles.menuItemButton}>
                        <View style={styles.menuItem}>
                            <Home color={Colors.blodLight} />
                            <Text style={styles.menuItemText}>Home</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuItemButton}>
                        <View style={styles.menuItem}>
                            <Edit2 color={Colors.blodLight} />
                            <Text style={styles.menuItemText}>Create Musician</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuItemButton}>
                        <View style={styles.menuItem}>
                            <Smile color={Colors.blodLight} />
                            <Text style={styles.menuItemText}>Smile</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuItemButton}>
                        <View style={styles.menuItem}>
                            <User color={Colors.blodLight} />
                            <Text style={styles.menuItemText}>View Profile</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuItemButton}>
                        <View style={styles.menuItem}>
                            <MessageCircle color={Colors.blodLight} />
                            <Text style={styles.menuItemText}>Messages</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuItemButton}>
                        <View style={styles.menuItem}>
                            <Settings color={Colors.blodLight} />
                            <Text style={styles.menuItemText}>Home</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'baseline',
        height: 0,
    },
    iconButton: {
        backgroundColor: Colors.blodLight,
        width: 30,
        height: 30,
        marginRight: -30,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderTopEndRadius: 0,
        borderBottomEndRadius: 0,
        paddingRight: 2,
        marginTop: 0,
    },
    iconButtonGraph: {
        height: 25,
        width: 25,
        color: Colors.turquoise,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.turquoise,
        marginRight: 0,
    },
    safeArea: {
        height: 120,
        backgroundColor: Colors.blodLight,
    },
    itemContaner: {
        flex: 1,
        backgroundColor: Colors.turquoise,
    },
    // Profile
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    profilePic: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.spacecadet,
        marginRight: 10,
        justifyContent: 'center',
    },
    profileTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.spacecadet,
    },
    profileSubtitle: {
        fontSize: 14,
        color: Colors.spacecadet,
    },
    // Menu
    menu: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    menuItemButton: {
        width: '100%',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderBottomColor: Colors.blodLight,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        marginBottom: 10,
    },
    menuItemText: {
        fontSize: 18,
        color: Colors.blodLight,
        marginLeft: 10,
    },
})

export default Menu