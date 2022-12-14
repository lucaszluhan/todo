import { useState } from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import { FormProps } from '../../types/FormProps'
import { style } from './style'

export const Form = ({ addItem }: FormProps) => {
  const [note, setNote] = useState<string>('')
  const [id, setId] = useState<number>(1)
  const [isFocused, setIsFocused] = useState<boolean>(false)

  function handleNewItem() {
    addItem({ id: id, note: note, completed: false })
    setId(id + 1)
    setNote('')
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
      <TouchableOpacity style={style.button} onPress={() => handleNewItem()}>
        <Image source={require('../../images/plus.png')} />
      </TouchableOpacity>
    </View>
  )
}
