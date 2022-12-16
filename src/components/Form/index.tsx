import { useState } from 'react'
import { Alert, Button, Image, Pressable, TextInput, TouchableOpacity, View } from 'react-native'
import { FormProps } from '../../types/FormProps'
import { style } from './style'

export const Form = ({ addItem }: FormProps) => {
  const [note, setNote] = useState<string>('')
  const [id, setId] = useState<number>(5)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false)

  function handleNewItem() {
    if (!note) {
      Alert.alert('Preencha o campo de tarefa!')
      return
    }

    addItem({ id: id, note: note, completed: false })
    setId(id + 1)
    setNote('')
  }

  function handlePressIn() {
    setIsButtonActive(true)
  }

  function handlePressOut() {
    setIsButtonActive(false)
  }

  return (
    <View style={style.form}>
      <TextInput
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor={'#808080'}
        onChangeText={setNote}
        value={note}
        style={[style.input, isFocused && style.inputFocused]}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
      <Pressable
        style={[style.button, isButtonActive && style.buttonPress]}
        onPress={() => handleNewItem()}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Image source={require('../../images/plus.png')} />
      </Pressable>
    </View>
  )
}
