import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Form, List } from '../../components'
import { Note } from '../../types/Note'
import { style } from './style'

export const Home = () => {
  const [list, setList] = useState<Note[]>([])

  function handleAddNote(note: Note) {
    setList([...list, note])
  }

  function handleDeleteNote(id: number) {
    setList(list.filter(item => item.id !== id))
  }

  function handleCheck(id: number) {
    const update = list
    const item = update.findIndex(item => item.id == id)
    update[item].completed = !update[item].completed
    setList(update)
  }

  return (
    <View style={style.home}>
      <View style={style.form}>
        <Form addItem={handleAddNote} />
      </View>
      <View style={style.list}>
        <List data={list} removeFc={handleDeleteNote} checkFc={handleCheck} />
      </View>
    </View>
  )
}
