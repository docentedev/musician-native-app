import React from "react"
import { TouchableHighlight, View, StyleSheet, Alert } from "react-native"
import { Eye, Trash2 } from "react-native-feather"
import Colors from "../../config/Colors"

const deleteAlert = (musician: any) => () =>
    Alert.alert(
        'Delete musician',
        `Are you sure you want to delete ${musician.first_name} ${musician.last_name}?`,
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel action'),
                style: 'cancel'
            },
            { text: 'Ok', onPress: () => console.log('Musician deleted') }
        ]
    )

const viewAlert = (musician: any) => () =>
    Alert.alert(
        `${musician.first_name} ${musician.last_name}`,
        musician.description,
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel action'),
                style: 'cancel'
            },
        ]
    )

const SwipeRight = ({ item }: any) => {
    return (<View style={styles.wrapperRight}>
        <View style={styles.containerRight}>
            <View style={styles.iconContent}>
                <TouchableHighlight style={styles.actionButton} onPress={viewAlert(item)}>
                    <Eye color={Colors.turquoise} width={16} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.actionButton} onPress={deleteAlert(item)}>
                    <Trash2 color={Colors.blodLight} width={16} />
                </TouchableHighlight>
            </View>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    wrapperRight: {
        flexDirection: 'row',
        width: 100,
        padding: 2,
    },
    containerRight: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: Colors.blodLight,
        alignContent: 'center',
        padding: 10,
        borderRadius: 10,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    iconContent: {
        flexDirection: 'row',
        backgroundColor: Colors.turquoise,
        padding: 5,
        paddingBottom: 3,
        paddingTop: 3,
        justifyContent: 'space-between',
        alignContent: 'center',
        borderRadius: 15,
        width: 75,
        height: 38,
    },
    actionButton: {
        backgroundColor: Colors.darkpurple,
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SwipeRight
