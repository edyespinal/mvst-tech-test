import { TeaFacade } from '../infrastructure/tea.facade'

export const fetchTeaService = async () => {
  return new TeaFacade().fetchAll()
}
