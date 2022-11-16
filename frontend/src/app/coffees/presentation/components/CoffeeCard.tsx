import React from 'react'

type CoffeeCardProps = {
  title: string
  description: string
  date: string
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className='bg-white border border-solid border-stone-200 rounded-lg p-4'>
      <div className='w-full h-64'></div>
      <div className='border-t'>
        <h1 className='font-semibold text-lg text-primary'>{title}</h1>
        <p className='mt-2 text-sm text-grey'>{description}</p>
      </div>
    </div>
  )
}
