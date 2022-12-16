import { Dispatch, SetStateAction } from 'react'
import { Note } from './Note'

export interface CheckboxProps {
  item: Note
  checkFc: (id: number) => void
  completeFc: Dispatch<SetStateAction<boolean>>
  completeState: boolean
  completeNumbFc: Dispatch<SetStateAction<number | undefined>>
  data: Note[]
}
