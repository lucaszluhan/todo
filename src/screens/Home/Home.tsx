import { useState } from 'react'
import { View } from 'react-native'
import { Form, List } from '../../components'
import { Note } from '../../types/Note'
import { style } from './style'

export const Home = () => {
  const [list, setList] = useState<Note[]>([])

  function handleAddNote(note: Note) {
    setList([...list, note])
  }

  return (
    <View style={style.home}>
      <View style={style.form}>
        <Form addItem={handleAddNote} />
      </View>
      <View style={style.list}>
        <List data={list} />
      </View>
    </View>
  )
}
