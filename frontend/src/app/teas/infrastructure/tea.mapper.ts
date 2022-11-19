import { ITea, CreateTea } from '../domain/tea.factory'

export const TeaMapper = {
  toDomain: (data: ITea): ITea => CreateTea(data),
}
