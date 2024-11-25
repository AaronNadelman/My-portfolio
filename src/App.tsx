import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home/Home'
import Certifications from './pages/Certifications/Certifications'
import Contacto from './pages/Contacto/Contacto'
import Layout from './routes/Layout/Layout'
import SobreMi from './pages/SobreMi/SobreMi'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" key="1" element={<Home />} />
          <Route
            path="/certificaciones"
            element={
              <Certifications
                id={0}
                img={''}
                title={''}
                duration={''}
                institute={''}
                skills={''}
              />
            }
          />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
