export class TeaFacade {
  async fetchAll() {
    return [
      {
        title: 'GEPA Chiapas with two lines',
        description: 'Distributed from the nice countryside of São Paulo',
        imageUrl: '/static/img/placeholder.png',
        date: new Date().toISOString(),
      },
    ]
  }
}
