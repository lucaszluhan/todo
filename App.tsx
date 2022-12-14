import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { style } from './AppStyle'
import { Header } from './src/components'
import { Home } from './src/screens/Home/Home'

export default function App() {
  return (
    <View style={style.app}>
      <StatusBar style={'light'} translucent />
      <Header />
      <Home />
    </View>
  )
}
