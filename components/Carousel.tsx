import React  from 'react'
import {
    ImageBackground,
    StyleSheet,
    Text,
    View
} from 'react-native'

import Swiper from 'react-native-swiper'
import { musicianApiPrefix } from '../config/apis'
import Colors from '../config/Colors'
import Sizes from '../config/Sizes'
import { ChevronLeft, ChevronRight } from 'react-native-feather'

const Carousel = ({ data }: any) => {
    return data.length > 0 ? (
        <Swiper
            style={styles.wrapper}
            showsButtons={true}
            autoplay={true}
            dotColor={Colors.snow}
            activeDotColor={Colors.turquoise}
            nextButton={
                <Text style={styles.buttonText}>
                    <ChevronRight height={Sizes.x5} width={Sizes.x5} color={Colors.snow} />
                </Text>
            }
            prevButton={
                <Text style={styles.buttonText}>
                    <ChevronLeft height={Sizes.x5} width={Sizes.x5} color={Colors.snow} />
                </Text>
            }
        >
            {data.map((item: any) => (
                <View style={styles.slide1} key={item.id}>
                    <ImageBackground
                        source={{ uri: musicianApiPrefix(`/files/${item.image}`) }}
                        style={styles.image}
                    >
                        <Text style={styles.text}>{item.first_name}</Text>
                    </ImageBackground>
                </View>
            ))}
        </Swiper>
    ) : (
        <Text>Loading...</Text>
    )
}

const styles = StyleSheet.create({
    wrapper: {
    },
    buttonText: {
        color: Colors.snow,
        fontSize: Sizes.x9,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: Sizes.x1,
        marginBottom: Sizes.x1,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        color: Colors.snow,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.darkpurple,
    },
    text: {
        color: Colors.snow,
        textTransform: 'uppercase',
        fontSize: Sizes.x6,
        fontWeight: 'bold',
        textShadowOffset: { width: 4, height: 4 },
        textShadowRadius: 1,
        textShadowColor: Colors.spacecadet,
    }
})

export default Carousel
