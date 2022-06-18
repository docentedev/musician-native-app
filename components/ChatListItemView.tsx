import React, { Fragment } from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight, Alert, Animated } from 'react-native'
import { Eye, Trash2 } from 'react-native-feather'
import { musicianApiPrefix } from '../config/apis';
import Colors from '../config/Colors';

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

const chatListItemView = ({ musician: item, index }: any) => {
    return (
        <Fragment>
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
                    <View style={styles.iconContainer}>
                        <View style={styles.iconContent}>
                            <TouchableHighlight style={styles.actionButton} onPress={viewAlert(item)}>
                                <Eye color={Colors.turquoise} width={16} />
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.actionButton} onPress={deleteAlert(item)}>
                                <Trash2 color={Colors.blodLight} width={16} />
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flex: 1,
        padding: 2,
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
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'flex-end',
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
});

export default chatListItemView;