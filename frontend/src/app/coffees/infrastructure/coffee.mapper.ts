import { ICoffee, CreateCoffee } from '../domain/coffee.factory'

export const CoffeeMapper = {
  toDomain: (coffeeData: ICoffee): ICoffee => CreateCoffee(coffeeData),
}
