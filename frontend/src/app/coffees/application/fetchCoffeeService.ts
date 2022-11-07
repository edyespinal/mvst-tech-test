import { CoffeeFacade } from '../infrastructure/coffee.facade';

export const fetchCoffeeService = async () => {
  return await new CoffeeFacade().fetchAll();
};
