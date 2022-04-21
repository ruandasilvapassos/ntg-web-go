import { Footer } from '@components/Footer'
import { Navbar } from '@components/Navbar'

interface MainLayoutProps {
  noHeader?: boolean
  noFooter?: boolean
}

export const MainLayout: React.FC<MainLayoutProps> = ({ noHeader = false, noFooter, children }) => {
  return (
    <>
      {!noHeader && <Navbar />}
      {children}
      {!noFooter && <Footer />}
    </>
  )
}
