import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 56,
    marginBottom: 8,
    padding: 20,
  },
  text: {
    color: '#F2F2F2',
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginHorizontal: 20,
    height: 35,
  },
  textCompleted: {
    textDecorationLine: 'line-through',
  },
})
