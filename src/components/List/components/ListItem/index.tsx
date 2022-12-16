import { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { ListItemProps } from '../../../../types/ListItemProps'
import { Checkbox } from '../Checkbox'
import { style } from './style'
import SvgComponent from '../../../../images/trash'

export const ListItem = ({ item, removeFc, checkFc, completeNumbFc, data }: ListItemProps) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(item.completed)
  const [isDeleteActive, setIsDeleteActive] = useState<boolean>()

  function handleDeleteItem() {
    removeFc(item.id)
  }

  function handlePressIn() {
    setIsDeleteActive(true)
  }

  function handlePressOut() {
    setIsDeleteActive(false)
  }

  return (
    <View style={[style.container, isCompleted && style.containerCompleted]}>
      <Checkbox
        item={item}
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
      <Pressable
        style={isDeleteActive && style.trashPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handleDeleteItem}
      >
        <SvgComponent fill={isDeleteActive ? '#E25858' : '#808080'} />
      </Pressable>
    </View>
  )
}
