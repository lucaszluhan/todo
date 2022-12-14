import { Text, View } from 'react-native'
import { ListItemProps } from '../../../../types/ListItemProps'
import { Checkbox } from '../Checkbox'
import { style } from './style'

export const ListItem = ({ item }: ListItemProps) => {
  return (
    <View style={style.container}>
      <Checkbox />
      <Text style={style.text}>{item.note}</Text>
    </View>
  )
}
