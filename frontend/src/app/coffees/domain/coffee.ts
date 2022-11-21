import { IProduct } from 'src/app/typings/product'

// I implemented this as a Factory function instead of using a class.
// I would like to discuss the pros / cons of each approach if possible.

export interface ICoffee extends IProduct {
  type: 'arabic' | 'robust'
  getDate?: () => string
}

function CreateCoffee({
  title,
  description,
  imageUrl,
  type,
}: ICoffee): ICoffee {
  const addedAt = Date()

  const coffeeActions = {
    getDate(): string {
      return addedAt
    },
  }

  const coffee: ICoffee = Object.create(coffeeActions)

  coffee.title = title
  coffee.description = description
  coffee.imageUrl = imageUrl
  coffee.type = type

  return coffee
}

export { CreateCoffee }
