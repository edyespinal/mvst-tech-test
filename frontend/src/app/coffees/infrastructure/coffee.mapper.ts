import { Coffee } from '../domain/coffee';

export const CoffeeMapper = {
  toDomain: (data: any) =>
    new Coffee({
      title: data.title,
      description: data.description || '',
      addedAt: data.date || '',
    }),
};
