import React from 'react'
import { motion } from 'framer-motion'
import { useStore } from '../../stores/useStore'

const Section = ({ title, children, className, theme }) => (
    <section className={`min-h-auto md:min-h-screen flex flex-col justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 ${className}`}>
        <div className="container mx-auto max-w-6xl">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-12 text-tima-gold border-l-4 border-tima-gold pl-4 sm:pl-6"
            >
                {title}
            </motion.h2>
            {children}
        </div>
    </section>
)

export function Corporate() {
    const theme = useStore((state) => state.theme)
    const light = theme === 'light'

    return (
        <div className={`w-full ${light ? 'bg-gray-50' : 'bg-black/80 backdrop-blur-md'}`}>
            {/* Content removed per user request */}
        </div>
    )
}
