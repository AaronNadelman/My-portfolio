import { ReactNode } from 'react'
import Nav from '../../components/Nav/Nav'
import { Footer } from '../../components/Footer/Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col background-color-linear-gradient(to top, #00D7C0, #FF00D3) h-full min-h-screen md:justify-center  bg-cover bg-fixed dark:bg-url('public\endless-constellation.svg') dark:bg-cover ">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
