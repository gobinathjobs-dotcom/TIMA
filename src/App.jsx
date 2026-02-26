import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Overview } from './pages/Overview'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
