import { teas } from '@prisma/client'

// I implemented this as a Factory function instead of using a class.
// I would like to discuss the pros / cons of each approach if possible.

export interface ITea extends teas {
  getDate?: () => string
}

function CreateTea({ id, brand, name, description, imageUrl }: ITea): ITea {
  const addedAt = Date()

  const teaActions = {
    getDate(): string {
      return addedAt
    },
  }

  let tea: ITea = Object.create(teaActions)

  tea = {
    id,
    brand,
    name,
    description,
    imageUrl,
  }

  return tea
}

export { CreateTea }
