import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  form: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    backgroundColor: '#262626',
    borderRadius: 6,
    borderColor: '#0D0D0D',
    borderWidth: 1,
    color: '#F2F2F2',
    fontSize: 16,
    height: 57,
    marginRight: 10,
    padding: 16,
    flexGrow: 1,
    maxWidth: 290,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: '#5E60CE',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    height: 52,
    justifyContent: 'center',
    width: 52,
  },
  buttonPress: {
    backgroundColor: '#4EA8DE',
  },
})
