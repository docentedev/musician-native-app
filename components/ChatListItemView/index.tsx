import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { musicianApiPrefix } from '../../config/apis'
import Colors from '../../config/Colors'
import SwipeLeft from './SwipeLeft'
import SwipeRight from './SwipeRight'

const swipeFromLeftOpen = () => {
    // alert('Swipe from left')
}

const swipeFromRightOpen = () => {
    // alert('Swipe from right')
}

const chatListItemView = ({ musician: item, index: _i }: any) => {
    return (
        <View style={styles.mainContainer}>
            <Swipeable
                renderLeftActions={() => (<SwipeLeft />)}
                renderRightActions={() => (<SwipeRight item={item} />)}
                onSwipeableRightOpen={swipeFromLeftOpen}
                onSwipeableLeftOpen={swipeFromRightOpen}
            >
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <View>
                            <Image
                                style={styles.image}
                                source={{ uri: musicianApiPrefix(`/files/${item.image}`) }}
                            />
                        </View>
                        <View style={styles.textContent}>
                            <Text style={styles.text}>{item.first_name} {item.last_name}</Text>
                            <Text style={styles.text}>{item.alias || '...'}</Text>
                        </View>
                    </View>
                </View>
            </Swipeable>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.blodLight,
        marginTop: 10,
        borderRadius: 10,
    },
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
    wrapper: {
        flexDirection: 'row',
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: Colors.darkpurple,
        alignContent: 'center',
        padding: 10,
        borderRadius: 10,
    },
    textContent: {
        flex: 1,
        paddingLeft: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'flex-start',
    },
    text: {
        color: Colors.snow
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20
    }
})

export default chatListItemView;