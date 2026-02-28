import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Hero } from '../components/ui/Hero'


export function Home() {
    return (
        <Layout>
            <Hero />

            {/* Test Page 1 */}
            <div className="w-full h-screen bg-transparent flex items-center justify-center border-t border-white/10">
                <h2 className="text-4xl font-bold text-white tracking-widest drop-shadow-lg">TEST PAGE 1</h2>
            </div>

            {/* Test Page 2 */}
            <div className="w-full h-screen bg-transparent flex items-center justify-center border-t border-white/10">
                <h2 className="text-4xl font-bold text-white tracking-widest drop-shadow-lg">TEST PAGE 2</h2>
            </div>
        </Layout>
    )
}
