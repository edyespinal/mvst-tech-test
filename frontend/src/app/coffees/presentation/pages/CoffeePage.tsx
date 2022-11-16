import React from 'react'
import { Coffee } from '../../domain/coffee'
import { CoffeeCard } from '../components/CoffeeCard'

type Props = {
  data: Coffee[]
}

export const CoffeePage: React.FC<Props> = ({ data }) => {
  return (
    <div className='mx-10 mt-12 px-10'>
      <h1 className='text-3xl mb-10'>Welcome to MVST Coffee session </h1>
      {data.map(coffee => (
        <CoffeeCard
          key={coffee.title}
          title={coffee.title}
          description={coffee.description}
          date={coffee.getDate()}
        />
      ))}
    </div>
  )
}
