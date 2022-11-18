import { Coffee } from '../domain/coffee'

export const CoffeeMapper = {
  toDomain: (data: Coffee) =>
    new Coffee({
      title: data.title,
      description: data.description || '',
      imageUrl: data.imageUrl || '',
      type: data.type || '',
    }),
}
