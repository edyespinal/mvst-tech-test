import { ICoffee } from '@/app/coffees/domain/coffee'
import { CoffeeFacade } from '@/app/coffees/infrastructure/coffee.facade'
import { procedure, router } from '@/server/trpc'

export const coffeeRouter = router({
  fetchAll: procedure.query<ICoffee[]>(async () => {
    return await new CoffeeFacade().fetchAll()
  }),
})

export const coffeeServerCaller = coffeeRouter.createCaller({})
