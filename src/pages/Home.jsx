import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Hero } from '../components/ui/Hero'
import { TechNeural } from '../components/ui/TechNeural'
import { Corporate } from '../components/ui/Corporate'
import { Timeline } from '../components/ui/Timeline'
import { Future } from '../components/ui/Future'
import { Capabilities } from '../components/ui/Capabilities'
import { Contact } from '../components/ui/Contact'

export function Home() {
    return (
        <Layout>
            <Hero />
            <TechNeural />
            <Corporate />
            <Timeline />
            <Future />
            <Capabilities />
            <Contact />
        </Layout>
    )
}
