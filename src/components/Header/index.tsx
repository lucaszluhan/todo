import { Image, View } from 'react-native'
import { Form } from '../Form'
import { style } from './style'

export const Header = () => {
  return (
    <View style={style.banner}>
      <Image source={require('../../images/Logo.png')} />
    </View>
  )
}
