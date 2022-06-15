import { TouchableWithoutFeedback, View, StyleSheet, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    mainCardView: {
        height: 60,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: Colors.white,
        borderRadius: 3,
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },
    subCardView: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: Colors.history_back,
        borderColor: Colors.color_eeeeee,
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const chatListItemView = ({musician: item, index}) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => {}}>
            <View style={styles.mainCardView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginLeft: 12 }}>
                        <Text
                            style={{
                                fontSize: 14,
                                color: Colors.black,
                                fontWeight: 'bold',
                                //fontFamily: Fonts.nunitoBold,
                                textTransform: 'capitalize',
                            }}>
                            {item.first_name} {item.last_name}
                        </Text>
                        <View
                            style={{
                                marginTop: 4,
                                borderWidth: 0,
                                width: '85%',
                            }}>
                            <Text
                                style={{
                                    color: 'rgba(0,0,0,0.5)',
                                    fontSize: 12,
                                }}>
                                {item.alias}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default chatListItemView;