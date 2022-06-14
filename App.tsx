import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
      {musicians.map(musician => (
        <Text key={musician.id}>{musician.first_name}</Text>
      ))}
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
