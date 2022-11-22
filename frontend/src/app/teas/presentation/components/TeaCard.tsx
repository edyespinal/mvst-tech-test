import { PRODUCT_IMAGE_PLACEHOLDER } from '@/utils/constants'
import Image from 'next/image'
import { ITea } from '../../domain/tea.factory'

type Props = Pick<ITea, 'brand' | 'name' | 'imageUrl' | 'description'>

export const TeaCard: React.FC<Props> = ({
  brand,
  name,
  imageUrl,
  description,
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
        <div className='w-full border-t pt-2 '>
          <h3 className='font-semibold text-lg line-clamp-1'>
            {brand} {name}
          </h3>

          <p className='mt-2 text-sm text-grey truncate'>{description}</p>
        </div>
      </div>
    </div>
  )
}
