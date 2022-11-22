import { Footer } from './components/Footer'
import { Header } from './components/Header'

interface ILayout {
  children: React.ReactNode
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <div className='max-w-100 mx-auto'>{children}</div>
      <Footer />
    </>
  )
}
