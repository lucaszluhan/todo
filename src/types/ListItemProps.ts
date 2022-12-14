import { Note } from './Note'

export interface ListItemProps {
  item: Note
  removeFc: (id: number) => void
}
