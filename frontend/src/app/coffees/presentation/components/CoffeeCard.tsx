import React from 'react'
import Image from 'next/image'

type CoffeeCardProps = {
  title: string
  imageUrl: string
  description?: string
  type?: string
  date?: string
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({
  title,
  imageUrl,
  description,
}) => {
  return (
    <div className='bg-white border border-solid border-grey rounded-lg'>
      <div className='relative w-full h-64 px-10 py-4 grid place-items-center'>
        <Image src={imageUrl} height={248} width={248} alt={title} />
      </div>

      <div className='border-t pt-2 px-4 pb-4'>
        <h1 className='font-semibold text-lg text-primary'>{title}</h1>
        <p className='mt-2 text-sm text-grey'>{description}</p>
      </div>
    </div>
  )
}
