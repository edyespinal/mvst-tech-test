import { coffees } from '@prisma/client'

// I implemented this as a Factory function instead of using a class.
// I would like to discuss the pros / cons of each approach if possible.

export interface ICoffee extends coffees {
  type: 'arabic' | 'robusta'
  getDate?: () => string
}

function CreateCoffee({
  id,
  name,
  brand,
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

  let coffee: ICoffee = Object.create(coffeeActions)

  coffee = {
    id,
    name,
    brand,
    description,
    imageUrl,
    type,
  }

  return coffee
}

export { CreateCoffee }
