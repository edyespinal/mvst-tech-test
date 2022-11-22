import { fetchTeaService } from '@/app/teas/application/fetchTeaService'
import { ITea } from '@/app/teas/domain/tea.factory'
import { TeaMapper } from '@/app/teas/infrastructure/tea.mapper'
import { TeaPage } from '@/app/teas/presentation/pages/TeaPage'
import { Layout } from '@/components/layout/Layout'

interface Props {
  data: ITea[]
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const data = await fetchTeaService()

  return {
    props: {
      data,
    },
  }
}

const TeasPage = ({ data }: Props): JSX.Element => {
  const domainData = data.map(TeaMapper.toDomain)

  return <TeaPage data={domainData} />
}

export default TeasPage

TeasPage.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>
