import { CreateTea } from './tea.factory'

it('is a valid Coffee', () => {
  expect(
    CreateTea({
      id: '637bcce6eb3efc3c84c48b0f',
      name: 'Lavazza Espresso',
      brand: 'Brand',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/mvst-coffee-tea.appspot.com/o/coffees%2Fcoffee-637bcce6eb3efc3c84c48b0f.png?alt=media&token=0e4baf1a-da62-4d57-8521-93c488cea813',
      description: 'good for espresso in Italy',
    }).id
  ).toEqual('637bcce6eb3efc3c84c48b0f')

  expect(
    CreateTea({
      id: '637bcce6eb3efc3c84c48b0f',
      name: 'Lavazza Espresso',
      brand: 'Brand',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/mvst-coffee-tea.appspot.com/o/coffees%2Fcoffee-637bcce6eb3efc3c84c48b0f.png?alt=media&token=0e4baf1a-da62-4d57-8521-93c488cea813',
      description: 'good for espresso in Italy',
    }).name
  ).toEqual('Lavazza Espresso')

  expect(
    CreateTea({
      id: '637bcce6eb3efc3c84c48b0f',
      name: 'Lavazza Espresso',
      brand: 'Brand',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/mvst-coffee-tea.appspot.com/o/coffees%2Fcoffee-637bcce6eb3efc3c84c48b0f.png?alt=media&token=0e4baf1a-da62-4d57-8521-93c488cea813',
      description: 'good for espresso in Italy',
    }).brand
  ).toEqual('Brand')

  expect(
    CreateTea({
      id: '637bcce6eb3efc3c84c48b0f',
      name: 'Lavazza Espresso',
      brand: 'Brand',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/mvst-coffee-tea.appspot.com/o/coffees%2Fcoffee-637bcce6eb3efc3c84c48b0f.png?alt=media&token=0e4baf1a-da62-4d57-8521-93c488cea813',
      description: 'good for espresso in Italy',
    }).imageUrl
  ).toEqual(
    'https://firebasestorage.googleapis.com/v0/b/mvst-coffee-tea.appspot.com/o/coffees%2Fcoffee-637bcce6eb3efc3c84c48b0f.png?alt=media&token=0e4baf1a-da62-4d57-8521-93c488cea813'
  )

  expect(
    CreateTea({
      id: '637bcce6eb3efc3c84c48b0f',
      name: 'Lavazza Espresso',
      brand: 'Brand',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/mvst-coffee-tea.appspot.com/o/coffees%2Fcoffee-637bcce6eb3efc3c84c48b0f.png?alt=media&token=0e4baf1a-da62-4d57-8521-93c488cea813',
      description: 'good for espresso in Italy',
    }).description
  ).toEqual('good for espresso in Italy')
})
