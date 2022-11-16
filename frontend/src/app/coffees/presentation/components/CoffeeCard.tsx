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
    <div className='bg-white border border-solid border-stone-200 rounded-lg p-4'>
      <div className='relative w-full h-64'>
        <Image src={imageUrl} layout='fill' alt={title} />
      </div>

      <div className='border-t'>
        <h1 className='font-semibold text-lg text-primary'>{title}</h1>
        <p className='mt-2 text-sm text-grey'>{description}</p>
      </div>
    </div>
  )
}
