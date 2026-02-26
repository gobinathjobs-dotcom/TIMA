import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Zap, Cpu, Globe } from 'lucide-react'
import { useStore } from '../../stores/useStore'

const projects = [
    { icon: <Rocket size={40} />, name: "Project Aether", category: "Aerospace", desc: "Next-gen propulsion systems for orbital logicstics.", impact: "Reducing launch costs by 40%." },
    { icon: <Zap size={40} />, name: "GigaVolt", category: "Energy", desc: "Solid-state battery manufacturing at scale.", impact: "Doubling EV range." },
    { icon: <Cpu size={40} />, name: "Cortex Core", category: "AI & Silicon", desc: "Neuromorphic chips for edge AI processing.", impact: "Real-time decision making for autonomous bots." },
    { icon: <Globe size={40} />, name: "TerraGrid", category: "Infrastructure", desc: "Smart city foundational API layer.", impact: "Optimizing urban resource usage by 30%." },
]

export function Future() {
    const theme = useStore((state) => state.theme)
    const light = theme === 'light'

    return (
        <section className={`py-12 sm:py-16 md:py-24 ${light
            ? 'bg-gradient-to-b from-white to-gray-50 text-gray-900'
            : 'bg-gradient-to-b from-tima-dark to-black text-white'
            }`}>
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                {/* Vision Declarations */}
                <div className="mb-12 sm:mb-16 md:mb-24 text-center">
                    <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                        Vision 2030
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className={`p-6 sm:p-8 rounded-xl ${light ? 'border border-gray-200 bg-white shadow-sm' : 'border border-white/10 bg-white/5 backdrop-blur-sm'}`}>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Global Expansion</h3>
                            <p className={`text-xs sm:text-sm md:text-base ${light ? 'text-gray-600' : 'text-gray-400'}`}>Operations in 50+ countries delivering localized manufacturing solutions.</p>
                        </div>
                        <div className={`p-6 sm:p-8 rounded-xl ${light ? 'border border-gray-200 bg-white shadow-sm' : 'border border-white/10 bg-white/5 backdrop-blur-sm'}`}>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Tech Leadership</h3>
                            <p className={`text-xs sm:text-sm md:text-base ${light ? 'text-gray-600' : 'text-gray-400'}`}>Pioneering standard-setting protocols in AI-driven assembly.</p>
                        </div>
                        <div className={`p-6 sm:p-8 rounded-xl ${light ? 'border border-gray-200 bg-white shadow-sm' : 'border border-white/10 bg-white/5 backdrop-blur-sm'}`}>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Sustainability</h3>
                            <p className={`text-xs sm:text-sm md:text-base ${light ? 'text-gray-600' : 'text-gray-400'}`}>Carbon negative operations across all manufacturing verticals.</p>
                        </div>
                    </div>
                </div>

                {/* Milestone Projects */}
                <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 md:mb-12 border-l-4 border-cyan-500 pl-3 sm:pl-4">Future Milestone Projects</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className={`p-4 sm:p-6 rounded-2xl transition-colors group ${light
                                    ? 'bg-white border border-gray-200 shadow-sm hover:border-cyan-400'
                                    : 'bg-gradient-to-bl from-gray-900 to-black border border-white/10 hover:border-cyan-500/50'
                                    }`}
                            >
                                <div className="mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors text-6xl sm:text-7xl">{project.icon}</div>
                                <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1">{project.name}</h4>
                                <span className={`text-xs font-mono uppercase tracking-wider ${light ? 'text-gray-500' : 'text-gray-500'}`}>{project.category}</span>
                                <p className={`mt-3 sm:mt-4 text-xs sm:text-sm mb-4 ${light ? 'text-gray-600' : 'text-gray-400'}`}>{project.desc}</p>
                                <div className={`pt-3 sm:pt-4 border-t ${light ? 'border-gray-200' : 'border-white/10'}`}>
                                    <span className="text-xs text-green-500 font-semibold">Impact: {project.impact}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
