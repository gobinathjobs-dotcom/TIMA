import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Zap, Cpu, Globe } from 'lucide-react'

const projects = [
    { icon: <Rocket size={40} />, name: "Project Aether", category: "Aerospace", desc: "Next-gen propulsion systems for orbital logicstics.", impact: "Reducing launch costs by 40%." },
    { icon: <Zap size={40} />, name: "GigaVolt", category: "Energy", desc: "Solid-state battery manufacturing at scale.", impact: "Doubling EV range." },
    { icon: <Cpu size={40} />, name: "Cortex Core", category: "AI & Silicon", desc: "Neuromorphic chips for edge AI processing.", impact: "Real-time decision making for autonomous bots." },
    { icon: <Globe size={40} />, name: "TerraGrid", category: "Infrastructure", desc: "Smart city foundational API layer.", impact: "Optimizing urban resource usage by 30%." },
]

export function Future() {
    return (
        <section className="py-24 bg-gradient-to-b from-tima-dark to-black text-white">
            <div className="container mx-auto px-6">
                {/* Vision Declarations */}
                <div className="mb-12 md:mb-24 text-center">
                    <h2 className="text-3xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                        Vision 2030
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-2">Global Expansion</h3>
                            <p className="text-gray-400">Operations in 50+ countries delivering localized manufacturing solutions.</p>
                        </div>
                        <div className="p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-2">Tech Leadership</h3>
                            <p className="text-gray-400">Pioneering standard-setting protocols in AI-driven assembly.</p>
                        </div>
                        <div className="p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-2">Sustainability</h3>
                            <p className="text-gray-400">Carbon negative operations across all manufacturing verticals.</p>
                        </div>
                    </div>
                </div>

                {/* Milestone Projects */}
                <div>
                    <h3 className="text-3xl font-bold mb-12 border-l-4 border-cyan-500 pl-4">Future Milestone Projects</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="p-6 rounded-2xl bg-gradient-to-bl from-gray-900 to-black border border-white/10 hover:border-cyan-500/50 transition-colors group"
                            >
                                <div className="mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">{project.icon}</div>
                                <h4 className="text-xl font-bold mb-1">{project.name}</h4>
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{project.category}</span>
                                <p className="mt-4 text-gray-400 text-sm mb-4">{project.desc}</p>
                                <div className="pt-4 border-t border-white/10">
                                    <span className="text-xs text-green-400 font-semibold">Impact: {project.impact}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
