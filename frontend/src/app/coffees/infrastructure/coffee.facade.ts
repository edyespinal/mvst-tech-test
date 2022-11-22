import { http } from '@/utils/http'
import { ICoffee } from '../domain/coffee.factory'

export class CoffeeFacade {
  async fetchAll(): Promise<ICoffee[]> {
    const fetchAllCoffees = await http
      .get<ICoffee[]>('/v1/api/coffees')
      .then(res => res.data)

    return fetchAllCoffees
  }
}
