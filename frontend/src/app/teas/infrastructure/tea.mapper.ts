import { ITea, CreateTea } from '../domain/tea.factory'

export const TeaMapper = {
  toDomain: (data: ITea): ITea => {
    const test = CreateTea(data)

    return test
  },
}
