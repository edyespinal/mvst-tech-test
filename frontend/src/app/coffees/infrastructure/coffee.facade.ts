import { http } from '@/utils/http'
import { ICoffee } from '../domain/coffee'

export class CoffeeFacade {
  async fetchAll(): Promise<ICoffee[]> {
    const fetched: ICoffee[] = await http
      .get('/api/coffees')
      .then(res => res.data)

    return fetched
  }
}
