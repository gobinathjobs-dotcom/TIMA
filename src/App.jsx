import React from 'react'
import { Layout } from './components/layout/Layout'
import { Hero } from './components/ui/Hero'
import { Corporate } from './components/ui/Corporate'
import { Timeline } from './components/ui/Timeline'
import { Future } from './components/ui/Future'
import { Capabilities } from './components/ui/Capabilities'
import { Contact } from './components/ui/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <Corporate />
      <Timeline />
      <Future />
      <Capabilities />
      <Contact />
      {/* End of Main Content */}
    </Layout>
  )
}

export default App
