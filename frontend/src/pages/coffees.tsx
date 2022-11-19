import React from 'react'
import { ICoffee } from 'src/app/coffees/domain/coffee'
import { Layout } from 'src/components/layout/Layout'
import { fetchCoffeeService } from '../app/coffees/application/fetchCoffeeService'
import { CoffeeMapper } from '../app/coffees/infrastructure/coffee.mapper'
import { CoffeePage } from '../app/coffees/presentation/pages/CoffeePage'
import { NextPageWithLayout } from './_app'

export async function getStaticProps(): Promise<{
  props: { data: ICoffee[] }
}> {
  const data = await fetchCoffeeService()

  return {
    props: {
      data,
    },
  }
}

const CoffeesPage: NextPageWithLayout = ({ data }: any): JSX.Element => {
  const domainData = data.map(CoffeeMapper.toDomain)
  return <CoffeePage data={domainData} />
}

export default CoffeesPage

CoffeesPage.getLayout = page => <Layout>{page}</Layout>
