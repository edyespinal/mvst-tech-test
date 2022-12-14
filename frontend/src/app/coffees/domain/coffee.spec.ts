import { CreateCoffee } from './coffee.factory'

it('is a valid Coffee', () => {
  expect(
    CreateCoffee({
      id: '637bcce6eb3efc3c84c48b0f',
      name: 'Lavazza Espresso',
      brand: 'Brand',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/mvst-coffee-tea.appspot.com/o/coffees%2Fcoffee-637bcce6eb3efc3c84c48b0f.png?alt=media&token=0e4baf1a-da62-4d57-8521-93c488cea813',
      description: 'good for espresso in Italy',
      type: 'arabic',
    }).id
  ).toEqual('637bcce6eb3efc3c84c48b0f')

  expect(
    CreateCoffee({
      id: '637bcce6eb3efc3c84c48b0f',
      name: 'Lavazza Espresso',
      brand: 'Brand',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/mvst-coffee-tea.appspot.com/o/coffees%2Fcoffee-637bcce6eb3efc3c84c48b0f.png?alt=media&token=0e4baf1a-da62-4d57-8521-93c488cea813',
      description: 'good for espresso in Italy',
      type: 'arabic',
    }).name
  ).toEqual('Lavazza Espresso')

  expect(
    CreateCoffee({
      id: '637bcce6eb3efc3c84c48b0f',
      name: 'Lavazza Espresso',
      brand: 'Brand',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/mvst-coffee-tea.appspot.com/o/coffees%2Fcoffee-637bcce6eb3efc3c84c48b0f.png?alt=media&token=0e4baf1a-da62-4d57-8521-93c488cea813',
      description: 'good for espresso in Italy',
      type: 'arabic',
    }).brand
  ).toEqual('Brand')

  expect(
    CreateCoffee({
      id: '637bcce6eb3efc3c84c48b0f',
      name: 'Lavazza Espresso',
      brand: 'Brand',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/mvst-coffee-tea.appspot.com/o/coffees%2Fcoffee-637bcce6eb3efc3c84c48b0f.png?alt=media&token=0e4baf1a-da62-4d57-8521-93c488cea813',
      description: 'good for espresso in Italy',
      type: 'arabic',
    }).imageUrl
  ).toEqual(
    'https://firebasestorage.googleapis.com/v0/b/mvst-coffee-tea.appspot.com/o/coffees%2Fcoffee-637bcce6eb3efc3c84c48b0f.png?alt=media&token=0e4baf1a-da62-4d57-8521-93c488cea813'
  )

  expect(
    CreateCoffee({
      id: '637bcce6eb3efc3c84c48b0f',
      name: 'Lavazza Espresso',
      brand: 'Brand',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/mvst-coffee-tea.appspot.com/o/coffees%2Fcoffee-637bcce6eb3efc3c84c48b0f.png?alt=media&token=0e4baf1a-da62-4d57-8521-93c488cea813',
      description: 'good for espresso in Italy',
      type: 'arabic',
    }).description
  ).toEqual('good for espresso in Italy')

  expect(
    CreateCoffee({
      id: '637bcce6eb3efc3c84c48b0f',
      name: 'Lavazza Espresso',
      brand: 'Brand',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/mvst-coffee-tea.appspot.com/o/coffees%2Fcoffee-637bcce6eb3efc3c84c48b0f.png?alt=media&token=0e4baf1a-da62-4d57-8521-93c488cea813',
      description: 'good for espresso in Italy',
      type: 'arabic',
    }).type
  ).toEqual('arabic')
})
