import { fetchTeaService } from 'src/app/teas/application/fetchTeaService'
import { TeaMapper } from 'src/app/teas/infrastructure/tea.mapper'
import { TeaPage } from 'src/app/teas/presentation/pages/TeaPage'
import { Layout } from 'src/components/layout/Layout'
import { NextPageWithLayout } from './_app'

export async function getStaticProps() {
  const data = await fetchTeaService()

  return {
    props: {
      data,
    },
  }
}

const TeasPage: NextPageWithLayout = ({ data }: any): JSX.Element => {
  const domainData = data.map(TeaMapper.toDomain)

  return <TeaPage data={domainData} />
}

export default TeasPage

TeasPage.getLayout = page => <Layout>{page}</Layout>
