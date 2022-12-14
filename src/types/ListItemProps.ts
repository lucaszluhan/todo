import { Dispatch, SetStateAction } from 'react'
import { Note } from './Note'

export interface ListItemProps {
  item: Note
  removeFc: (id: number) => void
  checkFc: (id: number) => void
  completeNumbFc: Dispatch<SetStateAction<number | undefined>>
  data: Note[]
}
