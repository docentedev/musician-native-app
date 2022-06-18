import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Route, Routes } from 'react-router-native'
import RoutesWrap from './components/Routes'
import Colors from './config/Colors'
import AuthProvider from './contexts/AuthContext'
import CreatePage from './pages/CreatePage'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <GestureHandlerRootView style={styles.gestureContainer}>
      <AuthProvider>
        <RoutesWrap>
          <SafeAreaView style={styles.safeContainerTop} />
          <SafeAreaView style={styles.safeContainer}>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='*' element={<IndexPage />} />
            </Routes>
            <StatusBar style="auto" />
          </SafeAreaView>
        </RoutesWrap>
      </AuthProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  safeContainerTop: {
    backgroundColor: Colors.blodLight,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  gestureContainer: {
    flex: 1,
  }
})
