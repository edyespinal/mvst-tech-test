import { ICoffee } from '../../domain/coffee.factory'

interface Props {
  type: ICoffee['type']
  color: string
}

export const TypeTag: React.FC<Props> = ({ type, color = 'bg-gray-400' }) => {
  return (
    <span
      className={`${color} text-stone-50 text-[13px] uppercase px-2 py-1 rounded-sm`}
    >
      {type}
    </span>
  )
}
