import { FlatList, Text, View } from 'react-native'
import { ListProps } from '../../types/ListProps'
import { ListEmpty } from './components/ListEmpty'
import { ListItem } from './components/ListItem'
import { style } from './style'

export const List = ({ data, removeFc }: ListProps) => {
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
            <Text style={style.number}>{data.length}</Text>
          </View>
          <Text style={style.done}>Concluidas</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={item => <ListItem item={item.item} removeFc={removeFc} />}
        ListEmptyComponent={<ListEmpty />}
      />
    </View>
  )
}
