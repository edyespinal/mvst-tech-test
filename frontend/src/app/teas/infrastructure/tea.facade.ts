import { http } from '@/utils/http'
import { ITea } from '../domain/tea.factory'

export class TeaFacade {
  async fetchAll(): Promise<ITea[]> {
    const fetchAllTeas = await http
      .get<ITea[]>('/api/teas')
      .then(res => res.data)

    return fetchAllTeas
  }
}
