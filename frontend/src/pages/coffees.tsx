import React from 'react'
import { ICoffee } from 'src/app/coffees/domain/coffee'
import { Layout } from 'src/components/layout/Layout'
import { fetchCoffeeService } from '../app/coffees/application/fetchCoffeeService'
import { CoffeeMapper } from '../app/coffees/infrastructure/coffee.mapper'
import { CoffeePage } from '../app/coffees/presentation/pages/CoffeePage'

interface Props {
  data: ICoffee[]
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const data = await fetchCoffeeService()

  return {
    props: {
      data,
    },
  }
}

const CoffeesPage = ({ data }: Props): JSX.Element => {
  const domainData = data.map(CoffeeMapper.toDomain)
  return <CoffeePage data={domainData} />
}

export default CoffeesPage

CoffeesPage.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>
