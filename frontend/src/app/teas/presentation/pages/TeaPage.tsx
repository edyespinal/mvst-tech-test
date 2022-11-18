import React from 'react'
import { CoffeeCard } from 'src/app/coffees/presentation/components/CoffeeCard'
import { Tea } from '../../domain/tea'

type ITeaPage = {
  data: Tea[]
}

export const TeaPage: React.FC<ITeaPage> = ({ data }) => {
  return (
    <div className='mx-6 mt-12'>
      <div className='mb-10'>
        <h1 className='font-semibold text-4xl mb-4'>
          Just you, hot water and our tea
        </h1>
        <p className='font-light'>
          No pesticies or artificial flavours. We promise!
        </p>
      </div>
      {data.map(tea => (
        <CoffeeCard
          key={tea.title}
          title={tea.title}
          imageUrl={tea.imageUrl}
          description={tea.description}
        />
      ))}
    </div>
  )
}
