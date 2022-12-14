import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  createdContainer: {
    flexDirection: 'row',
  },
  created: {
    fontSize: 16,
    color: '#4EA8DE',
  },
  doneContainer: {
    flexDirection: 'row',
  },
  done: {
    fontSize: 16,
    color: '#8284FA',
  },
  headerNumbs: {
    backgroundColor: '#333333',
    borderRadius: 50,
    marginHorizontal: 8,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  number: {
    color: '#D9D9D9',
  },
})
