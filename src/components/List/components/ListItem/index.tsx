import { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { ListItemProps } from '../../../../types/ListItemProps'
import { Checkbox } from '../Checkbox'
import { style } from './style'

export const ListItem = ({ item, removeFc, checkFc, completeNumbFc, data }: ListItemProps) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(item.completed)
  function handleDeleteItem() {
    removeFc(item.id)
  }

  return (
    <View style={style.container}>
      <Checkbox
        id={item.id}
        checkFc={checkFc}
        completeFc={setIsCompleted}
        completeState={isCompleted}
        completeNumbFc={completeNumbFc}
        data={data}
      />
      <Text
        numberOfLines={2}
        ellipsizeMode={'tail'}
        style={[style.text, isCompleted && style.textCompleted]}
      >
        {item.note}
      </Text>
      <Pressable onPress={handleDeleteItem}>
        <Image source={require('../../../../images/trash.png')} />
      </Pressable>
    </View>
  )
}
