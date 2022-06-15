import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ChatLisItemView from './components/ChatListItemView'

const getMusicians = async () => {
  const response = await fetch('https://musician-api-production.up.railway.app/api/v1/musicians');
  const data = await response.json();
  return data;
}

export default function App() {
  const [musicians, setMusicians] = useState([]);
  useEffect(() => {
    getMusicians().then(data => {
      setMusicians(data.rows);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Musicians</Text>
      <ScrollView style={{
        flexGrow: 1,
        width: '100%',
      }}>
        {musicians.map(musician => (
          <ChatLisItemView key={musician.id} musician={musician} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
