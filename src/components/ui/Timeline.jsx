import React from 'react'
import { motion } from 'framer-motion'
import { useStore } from '../../stores/useStore'

const milestones = [
    {
        year: '2010',
        title: 'Inception',
        description: 'TIMA is founded with a vision to redefine manufacturing.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
    },
    {
        year: '2013',
        title: 'First Mega Factory',
        description: 'Commissioned the largest precision engineering plant in the region.',
        image: 'https://images.unsplash.com/photo-1565439390118-86d11624f92d?q=80&w=2000&auto=format&fit=crop'
    },
    {
        year: '2016',
        title: 'Digital Transformation',
        description: 'Launched the AI & Robotics division, integrating software with hardware.',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop'
    },
    {
        year: '2020',
        title: 'Global Expansion',
        description: 'Established operations in 3 continents, servicing Fortune 500 clients.',
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop'
    },
    {
        year: '2024',
        title: 'The TIMA Group',
        description: 'Consolidation of all subsidiaries under the TIMA Group umbrella.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    },
    {
        year: 'Future',
        title: 'Beyond Horizons',
        description: 'Aiming for carbon-neutral manufacturing and interplanetary logistics systems.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
    },
]

const MilestoneCard = ({ item, index, light }) => {
    // We make an alternating modern card layout
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col md:flex-row items-center w-full min-h-[50vh] md:min-h-[70vh] gap-8 md:gap-16 py-12 md:py-24 border-b ${light ? 'border-gray-200' : 'border-tima-white/10'}`}>
            {/* Image Side */}
            <motion.div
                className={`w-full md:w-1/2 h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden relative ${isEven ? 'md:order-1' : 'md:order-2'}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                />
            </motion.div>

            {/* Text Side */}
            <motion.div
                className={`w-full md:w-1/2 flex flex-col justify-center ${isEven ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <span className="h-0.5 w-12 bg-tima-gold" />
                    <span className="text-tima-gold font-bold tracking-widest text-lg md:text-2xl uppercase font-mono">{item.year}</span>
                </div>
                <h3 className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight ${light ? 'text-gray-900' : 'text-white'}`}>
                    {item.title}
                </h3>
                <p className={`text-lg md:text-2xl font-light leading-relaxed max-w-2xl ${light ? 'text-gray-600' : 'text-gray-300'}`}>
                    {item.description}
                </p>
            </motion.div>
        </div>
    )
}

export function Timeline() {
    const theme = useStore((state) => state.theme)
    const light = theme === 'light'

    return (
        <section className={`w-full relative py-24 md:py-40 ${light ? 'bg-[#FAFAFA]' : 'bg-[#050505]'}`}>
            <div className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-24">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: '-100px' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="mb-24 md:mb-40 text-center"
                >
                    <h2 className={`text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter ${light ? 'text-gray-900' : 'text-white'}`}>
                        Evolution of <span className="text-transparent bg-clip-text bg-gradient-to-r from-tima-gold to-yellow-600">TIMA</span>
                    </h2>
                </motion.div>

                {/* Timeline sequence */}
                <div className="flex flex-col">
                    {milestones.map((item, index) => (
                        <MilestoneCard key={index} item={item} index={index} light={light} />
                    ))}
                </div>

            </div>
        </section>
    )
}
