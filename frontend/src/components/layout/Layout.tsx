import { Footer } from './presentation/components/Footer'
import { Header } from './presentation/components/Header'

interface ILayout {
  children: React.ReactNode
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
