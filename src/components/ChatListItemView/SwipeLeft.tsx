import React from "react"
import { View, StyleSheet } from "react-native"
import { Star } from "react-native-feather"
import Colors from "../../config/Colors"

const SwipeLeft = ({ item }: any) => {
    return (<View style={styles.wrapperLeft}>
        <View style={styles.containerLeft}>
            <View>
                <Star color={Colors.gold} width={20} height={20} />
            </View>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    wrapperLeft: {
        flexDirection: 'row',
        width: 55,
        padding: 6,
    },
    containerLeft: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: Colors.darkpurple,
        alignContent: 'center',
        padding: 0,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
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

export default SwipeLeft
