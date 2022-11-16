import { Coffee } from '../domain/coffee'

export const CoffeeMapper = {
  toDomain: (data: any) =>
    new Coffee({
      title: data.title,
      description: data.description || '',
      imageUrl: data.imageUrl || '',
      addedAt: data.date || '',
      type: data.type || '',
    }),
}
