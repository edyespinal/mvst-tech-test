export class CoffeeFacade {
  async fetchAll() {
    return [
      {
        title: 'Amazing Coffee',
        description: 'Distributed from the nice countryside of São Paulo',
        date: new Date().toISOString(),
      },
    ];
  }
}
