import { ReactNode } from 'react'
import Nav from '../../components/Nav/Nav'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full min-h-screen bg-[url('/endless-constellation.svg')] bg-cover bg-fixed">
      <Nav />
      <main>{children}</main>
    </div>
  )
}

export default Layout
