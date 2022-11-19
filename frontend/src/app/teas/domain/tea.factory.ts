import { IProduct } from 'src/app/typings/product'

// I implemented this as a Factory function instead of using a class.
// I would like to discuss the pros / cons of each approach if possible.

export type ITea = IProduct & {
  getDate?: () => string
}

function CreateTea({ title, description, imageUrl }: ITea): ITea {
  const addedAt = Date()

  const teaActions = {
    getDate(): string {
      return addedAt
    },
  }

  const tea: ITea = Object.create(teaActions)

  tea.title = title
  tea.description = description
  tea.imageUrl = imageUrl

  return tea
}

export { CreateTea }
