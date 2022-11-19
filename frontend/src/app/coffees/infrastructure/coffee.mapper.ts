import { CreateCoffee, ICoffee } from '../domain/coffee'

export const CoffeeMapper = {
  toDomain: (data: ICoffee): ICoffee => CreateCoffee(data),
}
