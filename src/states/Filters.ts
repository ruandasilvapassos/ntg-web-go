import { createState } from '@hookstate/core'

interface filterStateProps {
  [collection: string]: {
    [field: string]: string
  }
}

export const filterState = createState<filterStateProps>({})
