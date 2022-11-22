import { ICoffee } from '@/app/coffees/domain/coffee.factory'

export const bgColorByType = (type: ICoffee['type']): string => {
  let color = 'bg-gray-400'

  switch (type) {
    case 'arabic': {
      color = 'bg-red'

      break
    }

    case 'robusta': {
      color = 'bg-green'

      break
    }
  }

  return color
}
