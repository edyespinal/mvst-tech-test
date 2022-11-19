import { ITea } from '../domain/tea.factory'
import { TeaFacade } from '../infrastructure/tea.facade'

export const fetchTeaService = (): Promise<ITea[]> => {
  return new TeaFacade().fetchAll()
}
