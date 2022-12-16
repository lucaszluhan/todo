import { useState } from 'react'
import { Image, Pressable } from 'react-native'
import { CheckboxProps } from '../../../../types/CheckboxProps'
import { style } from './style'

export const Checkbox = ({
  item,
  checkFc,
  completeFc,
  completeState,
  completeNumbFc,
  data,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(item.completed)
  const [isActive, setIsActive] = useState<boolean>(false)

  function handleCheck() {
    setIsChecked(!isChecked)
    checkFc(item.id)
    completeFc(!completeState)
    completeNumbFc(getCompletedNumb())
  }

  function getCompletedNumb() {
    return data.filter(item => item.completed === true).length
  }

  function handlePressIn() {
    setIsActive(true)
  }

  function handlePressOut() {
    setIsActive(false)
  }

  return (
    <Pressable
      onPress={handleCheck}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        style.checkbox,
        isActive && style.checkboxActive,
        isChecked && style.checked,
        isChecked && isActive && style.checkedActive,
      ]}
    >
      {isChecked && <Image source={require('../../../../images/Vector.png')} />}
    </Pressable>
  )
}
