import { Image, Pressable, Text, View } from 'react-native'
import { ListItemProps } from '../../../../types/ListItemProps'
import { Checkbox } from '../Checkbox'
import { style } from './style'

export const ListItem = ({ item, removeFc }: ListItemProps) => {
  function handleDeleteItem() {
    removeFc(item.id)
  }
  return (
    <View style={style.container}>
      <Checkbox />
      <Text style={style.text}>{item.note}</Text>
      <Pressable onPress={handleDeleteItem}>
        <Image source={require('../../../../images/trash.png')} />
      </Pressable>
    </View>
  )
}
