import Image from 'next/image'
import { ICoffee } from '../../domain/coffee.factory'
import { PRODUCT_IMAGE_PLACEHOLDER } from '@/utils/constants'
import { TypeTag } from './TypeTag'
import { bgColorByType } from '@/utils/bgColor'

type Props = Pick<ICoffee, 'brand' | 'name' | 'imageUrl' | 'type'>

export const CoffeeCard: React.FC<Props> = ({
  brand,
  name,
  imageUrl,
  type,
}) => {
  return (
    <div className='bg-white min-w-[264px] border border-solid border-grey rounded-lg hover:drop-shadow-xl hover:cursor-pointer'>
      <div className='relative w-full h-70 px-2 py-4 grid place-items-center'>
        <Image
          src={imageUrl || PRODUCT_IMAGE_PLACEHOLDER}
          height={248}
          width={248}
          alt={`${brand} - ${name}`}
        />
      </div>

      <div className='px-4 pb-4'>
        <div className='flex gap-2 items-start w-full border-t pt-2 '>
          <div className='w-[65%]'>
            <h3 className='font-semibold text-lg line-clamp-2'>
              {brand} {name}
            </h3>
          </div>
          <div className='w-[35%] text-right overflow-hidden'>
            <TypeTag type={type} color={bgColorByType(type)} />
          </div>
        </div>
      </div>
    </div>
  )
}
