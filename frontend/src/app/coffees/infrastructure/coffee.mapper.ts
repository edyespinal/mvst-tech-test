import { CreateCoffee, ICoffee } from '../domain/coffee'

export const CoffeeMapper = {
  toDomain: (coffeeData: ICoffee): ICoffee => CreateCoffee(coffeeData),
}
