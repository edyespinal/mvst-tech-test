import { Tea } from '../domain/tea'

export const TeaMapper = {
  toDomain: (data: Tea) =>
    new Tea({
      title: data.title || '',
      description: data.description || '',
      imageUrl: data.imageUrl || '',
    }),
}
