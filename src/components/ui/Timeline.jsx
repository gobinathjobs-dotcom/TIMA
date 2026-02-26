import React from 'react'
import { motion } from 'framer-motion'
import { useStore } from '../../stores/useStore'

const milestones = [
    { year: '2010', title: 'Inception', description: 'TIMA is founded with a vision to redefine manufacturing.' },
    { year: '2013', title: 'First Mega Factory', description: 'Commissioned the largest precision engineering plant in the region.' },
    { year: '2016', title: 'Digital Transformation', description: 'Launched the AI & Robotics division, integrating software with hardware.' },
    { year: '2020', title: 'Global Expansion', description: 'Established operations in 3 continents, servicing Fortune 500 clients.' },
    { year: '2024', title: 'The TIMA Group', description: 'Consolidation of all subsidiaries under the TIMA Group umbrella.' },
    { year: 'Future', title: 'Beyond Horizons', description: 'Aiming for carbon-neutral manufacturing and interplanetary logistics systems.' },
]

export function Timeline() {
    const theme = useStore((state) => state.theme)
    const light = theme === 'light'

    return (
        <section className={`py-12 sm:py-16 md:py-24 relative overflow-hidden ${light ? 'bg-white' : 'bg-tima-dark'}`}>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-tima-gold"
                >
                    Evolution of TIMA
                </motion.h2>

                <div className={`relative border-l-2 ml-4 sm:ml-6 md:ml-1/2 space-y-12 sm:space-y-16 ${light ? 'border-gray-300' : 'border-white/20'}`}>
                    {milestones.map((item, index) => (
                        <div key={index} className={`relative pl-8 sm:pl-12 md:pl-0 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:items-center group`}>

                            {/* Timeline Dot */}
                            <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-[9px] w-4 h-4 rounded-full bg-tima-gold border-4 border-black group-hover:scale-150 transition-transform duration-300" />

                            {/* Content Line for Desktop */}
                            <div className="hidden md:block w-1/2" />

                            {/* Content Card */}
                            <motion.div
                                className={`w-full md:w-[45%] p-4 sm:p-6 rounded-lg transition-colors ${index % 2 === 0 ? 'md:pr-12 md:text-left' : 'md:pl-12 md:text-left'} ${light
                                    ? 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                                    }`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <span className="text-tima-gold font-mono text-sm sm:text-base lg:text-xl">{item.year}</span>
                                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mt-1 mb-2 ${light ? 'text-gray-900' : 'text-white'}`}>{item.title}</h3>
                                <p className={`text-xs sm:text-sm md:text-base ${light ? 'text-gray-600' : 'text-gray-400'}`}>{item.description}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
