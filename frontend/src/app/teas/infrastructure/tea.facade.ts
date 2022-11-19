import { ITea } from '../domain/tea.factory'

export class TeaFacade {
  async fetchAll(): Promise<ITea[]> {
    return [
      {
        title: 'GEPA Chiapas with two lines',
        description: 'Distributed from the nice countryside of São Paulo',
        imageUrl: '/static/img/placeholder.png',
      },
    ]
  }
}
