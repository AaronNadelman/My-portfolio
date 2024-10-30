import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home/Home'
import Certifications from './pages/Certifications/Certifications'
import CvResume from './pages/Cv-resume/CvResume'
import Contacto from './pages/Contacto/Contacto'
import Layout from './routes/Layout/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificaciones" element={<Certifications />} />
          <Route path="/cv-resume" element={<CvResume />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
