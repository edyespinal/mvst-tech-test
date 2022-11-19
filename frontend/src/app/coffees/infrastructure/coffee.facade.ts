import { ICoffee } from '../domain/coffee'

export class CoffeeFacade {
  async fetchAll(): Promise<ICoffee[]> {
    return [
      {
        title: 'GEPA Chiapas with two lines',
        description: 'Distributed from the nice countryside of São Paulo',
        imageUrl: '/static/img/placeholder.png',
        type: 'arabic',
      },
    ]
  }
}
