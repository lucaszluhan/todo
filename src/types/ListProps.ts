import { Note } from './Note'

export interface ListProps {
  data: Note[]
  removeFc: (id: number) => void
}
