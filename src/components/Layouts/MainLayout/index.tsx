import { Footer } from '@components/Footer'
import { Navbar } from '@components/Navbar'

interface MainLayoutProps {
  noHeader?: boolean
  noFooter?: boolean
  navbarTheme?: 'light' | 'dark'
}

export const MainLayout: React.FC<MainLayoutProps> = ({ noHeader = false, noFooter, navbarTheme, children }) => {
  return (
    <>
      {!noHeader && <Navbar theme={navbarTheme} />}
      {children}
      {!noFooter && <Footer />}
    </>
  )
}
