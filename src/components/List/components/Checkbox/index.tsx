import { useState } from 'react'
import { Pressable } from 'react-native'
import { style } from './style'

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  function handleCheck() {
    setIsChecked(!isChecked)
  }

  return <Pressable onPress={handleCheck} style={style.checkbox}></Pressable>
}
