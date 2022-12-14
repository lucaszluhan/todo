import { Image, Text, View } from 'react-native'
import { style } from './style'

export const ListEmpty = () => {
  return (
    <View style={style.container}>
      <View style={style.line}></View>
      <Image style={style.image} source={require('../../../../images/Clipboard.png')} />
      <Text style={style.text}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={style.textSec}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}
