import { StatusBar } from 'expo-status-bar'
import { Fragment } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import ChatLisItemView from './components/ChatListItemView'
import Colors from './config/Colors'
import { useGetMusicians } from './services/getMusicians'

export default function App() {
  const [musicians, loading] = useGetMusicians()

  return (
    <Fragment>
      <SafeAreaView style={styles.safeContainerTop} />
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Musicians</Text>
          <ScrollView style={{
            flexGrow: 1,
            width: '100%',
          }}>
            {!loading ? musicians.map((musician: any) => (
              <ChatLisItemView key={musician.id} musician={musician} />
            )): <Text>Loading...</Text>}
          </ScrollView>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </Fragment>
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
