import { ICoffee } from '../domain/coffee.factory'
import { CoffeeFacade } from '../infrastructure/coffee.facade'

export const fetchCoffeeService = (): Promise<ICoffee[]> => {
  return new CoffeeFacade().fetchAll()
}
