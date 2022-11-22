import React from 'react'
import { ICoffee } from '../../domain/coffee.factory'
import { CoffeeCard } from '../components/CoffeeCard'

type Props = {
  data: ICoffee[]
}

export const CoffeePage: React.FC<Props> = ({ data }) => {
  return (
    <div className='mx-6 mt-10 lg:mx-0'>
      <div className='mb-10'>
        <h2 className='font-semibold text-4xl mb-4'>Our beloved coffee</h2>
        <p className='font-light text-grey'>
          Hand-picked, made with love, curated, call it what you want. But we
          promise you, this will be the best coffe of your life.
        </p>
      </div>

      <div className='sm:grid sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {data.map(coffee => (
          <div key={coffee.id} className='mb-6 last:mb-0 md:mb-0'>
            <CoffeeCard
              brand={coffee.brand}
              name={coffee.name}
              imageUrl={coffee.imageUrl}
              type={coffee.type}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
