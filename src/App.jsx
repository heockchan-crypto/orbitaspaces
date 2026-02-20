import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ParticleNetwork from './components/ParticleNetwork'
import Landing from './pages/Landing'
import About from './pages/About'
import WhatWeDo from './pages/WhatWeDo'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Apply from './pages/Apply'

function App() {
  return (
    <Router>
      <div className="relative bg-space-base min-h-screen text-silver-300 selection:bg-accent-cyan selection:text-space-base">
        <div className="fixed inset-0 bg-grid z-0 pointer-events-none" />
        <ParticleNetwork />

        <Header />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </main>

      </div>
    </Router>
  )
}

export default App
