import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Route, Routes } from 'react-router-native'
import RoutesWrap from './src/components/Routes'
import Colors from './src/config/Colors'
import AuthProvider from './src/contexts/AuthContext'
import CreatePage from './src/pages/CreatePage'
import IndexPage from './src/pages/IndexPage'
import LoginPage from './src/pages/LoginPage'
import { Provider } from './src/components/Sidebar'

export default function App() {
  return (
    <GestureHandlerRootView style={styles.gestureContainer}>
      <AuthProvider>
        <Provider>
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
        </Provider>
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
