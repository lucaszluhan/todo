import { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { ListProps } from '../../types/ListProps'
import { ListEmpty } from './components/ListEmpty'
import { ListItem } from './components/ListItem'
import { style } from './style'

export const List = ({ data, removeFc, checkFc }: ListProps) => {
  const [completedNumb, setCompletedNumb] = useState<number>()

  function getCompletedNumb() {
    setCompletedNumb(data.filter(item => item.completed === true).length)
  }

  useEffect(() => {
    getCompletedNumb()
  }, [data])

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.createdContainer}>
          <Text style={style.created}>Criadas</Text>
          <View style={style.headerNumbs}>
            <Text style={style.number}>{data.length}</Text>
          </View>
        </View>
        <View style={style.doneContainer}>
          <View style={style.headerNumbs}>
            <Text style={style.number}>{completedNumb}</Text>
          </View>
          <Text style={style.done}>Concluidas</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={item => (
          <ListItem
            completeNumbFc={setCompletedNumb}
            data={data}
            item={item.item}
            removeFc={removeFc}
            checkFc={checkFc}
          />
        )}
        ListEmptyComponent={<ListEmpty />}
      />
    </View>
  )
}
