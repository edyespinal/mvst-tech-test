import { fetchCoffeeService } from '@/app/coffees/application/fetchCoffeeService'
import { ICoffee } from '@/app/coffees/domain/coffee.factory'
import { CoffeeMapper } from '@/app/coffees/infrastructure/coffee.mapper'
import { CoffeePage } from '@/app/coffees/presentation/pages/CoffeePage'
import { Layout } from '@/components/layout/Layout'

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
