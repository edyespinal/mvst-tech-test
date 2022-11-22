import { Coffee } from './coffee.factory'

it('is a valid Coffee', () => {
  expect(
    new Coffee({
      title: 'Lavazza Espresso',
      description: 'good for espresso in Italy',
      addedAt: new Date(2012, 1, 1),
    }).title
  ).toEqual('Lavazza Espresso')

  expect(
    new Coffee({
      title: 'Lavazza Espresso',
      description: 'good for espresso in Italy',
      addedAt: new Date(2012, 1, 1),
    }).description
  ).toEqual('good for espresso in Italy')
})

it.skip('getDate', () => {
  // TODO - Fix me
  expect(
    new Coffee({
      title: 'Lavazza Espresso',
      description: 'good for espresso in Italy',
      addedAt: new Date(2012, 1, 1),
    }).getDate()
  ).toEqual('2012-01-31T23:00:00.000Z')
})
