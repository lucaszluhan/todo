import { useState } from 'react'
import { Image, Pressable } from 'react-native'
import { CheckboxProps } from '../../../../types/CheckboxProps'
import { style } from './style'

export const Checkbox = ({
  id,
  checkFc,
  completeFc,
  completeState,
  completeNumbFc,
  data,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  function handleCheck() {
    setIsChecked(!isChecked)
    checkFc(id)
    completeFc(!completeState)
    completeNumbFc(getCompletedNumb())
  }

  function getCompletedNumb() {
    return data.filter(item => item.completed === true).length
  }

  return (
    <Pressable onPress={handleCheck} style={[style.checkbox, isChecked && style.checked]}>
      {isChecked && <Image source={require('../../../../images/Vector.png')} />}
    </Pressable>
  )
}
