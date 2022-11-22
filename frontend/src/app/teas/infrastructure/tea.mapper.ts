import { ITea, CreateTea } from '../domain/tea.factory'

export const TeaMapper = {
  toDomain: (teaData: ITea): ITea => CreateTea(teaData),
}
