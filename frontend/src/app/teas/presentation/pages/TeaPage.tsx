import React from 'react'
import { ITea } from '../../domain/tea.factory'
import { TeaCard } from '../components/TeaCard'

type ITeaPage = {
  data: ITea[]
}

export const TeaPage: React.FC<ITeaPage> = ({ data }) => {
  return (
    <div className='mx-6 mt-10 lg:mx-0'>
      <div className='mb-10'>
        <h2 className='font-semibold text-4xl mb-4'>
          Just you, hot water and our tea
        </h2>
        <p className='font-light text-grey'>
          No pesticies or artificial flavours. We promise!
        </p>
      </div>

      <div className='sm:grid sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {data.map(tea => (
          <div key={tea.id} className='mb-6 last:mb-0 md:mb-0'>
            <TeaCard
              brand={tea.brand}
              name={tea.name}
              imageUrl={tea.imageUrl}
              description={tea.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
