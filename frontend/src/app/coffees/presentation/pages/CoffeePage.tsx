import React from 'react'
import { Coffee } from '../../domain/coffee'
import { CoffeeCard } from '../components/CoffeeCard'

type Props = {
  data: Coffee[]
}

export const CoffeePage: React.FC<Props> = ({ data }) => {
  return (
    <div className='mx-6 mt-10'>
      <div className='mb-10'>
        <h1 className='font-semibold text-4xl mb-4'>Our beloved coffee</h1>
        <p className='font-light'>
          Hand-picked, made with love, curated, call it what you want. But we
          promise you, this will be the best coffe of your life.
        </p>
      </div>
      {data.map(coffee => (
        <CoffeeCard
          key={coffee.title}
          title={coffee.title}
          imageUrl={coffee.imageUrl}
          description={coffee.description}
        />
      ))}
    </div>
  )
}
