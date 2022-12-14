import { useState } from 'react'
import { Image, Pressable } from 'react-native'
import { style } from './style'

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  function handleCheck() {
    setIsChecked(!isChecked)
  }

  return (
    <Pressable onPress={handleCheck} style={[style.checkbox, isChecked && style.checked]}>
      {isChecked && <Image source={require('../../../../images/Vector.png')} />}
    </Pressable>
  )
}
