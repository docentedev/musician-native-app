import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Carousel from '../components/Carousel'
import ChatLisItemView from '../components/ChatListItemView'
import Nav from '../components/Nav'
import Colors from '../config/Colors'
import { useGetMusicians } from '../services/getMusicians'

const IndexPage = () => {
    const [musicians, loading] = useGetMusicians()

    return (
        <View style={styles.container}>
            <Nav title="Index" />
            <View style={styles.carouselContainer}>
                <Carousel data={musicians} />
            </View>
            <ScrollView style={{
                flexGrow: 1,
                width: '100%',
            }}>
                {!loading ? musicians.map((musician: any) => (
                    <ChatLisItemView key={musician.id} musician={musician} />
                )) : <Text>Loading...</Text>}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    safeContainerTop: {
        backgroundColor: Colors.blodLight,
    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#000',
    },
    carouselContainer: {
        height: 200,
    },
    container: {
        flex: 1,
    },
    title: {
        color: Colors.darkpurple,
        fontSize: 20,
        height: 30,
        padding: 4,
        marginBottom: 5,
        backgroundColor: Colors.blodLight,
        textAlign: 'center',
    }
});

export default IndexPage;