import React from 'react'
import { motion } from 'framer-motion'

const Section = ({ title, children, className }) => (
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
    return (
        <div className="w-full bg-black/80 backdrop-blur-md">
            {/* Motto & Philosophy */}
            <Section title="Philosophy">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Core Belief</h3>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                            "Engineering the bridge between the atom and the bit."
                        </p>
                        <p className="text-sm sm:text-base text-gray-400 mt-4">
                            At TIMA, we believe that the future involves a seamless integration of advanced hardware manufacturing and cutting-edge digital intelligence. We don't just build machines; we build ecosystems.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Core Principles</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300">
                            <li>Vertical Integration: Control every layer of the stack.</li>
                            <li>Precision Engineering: Zero tolerance for mediocrity.</li>
                            <li>Digital Twin First: Simulate before you build.</li>
                            <li>Sustainable Innovation: Green tech is the only tech.</li>
                        </ul>
                    </motion.div>
                </div>
            </Section>

            {/* Founder & Director Portfolio */}
            <Section title="Leadership">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-stretch">
                    <motion.div
                        className="w-full md:w-1/3 aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden relative group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        {/* Placeholder for Founder Image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-600">
                            [Founder Image Placeholder]
                            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-gradient-to-t from-black to-transparent">
                                <h4 className="text-lg sm:text-xl font-bold text-white">John Doe</h4>
                                <p className="text-sm sm:text-base text-tima-gold">Founder & CEO</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-2/3"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <div className="bg-gray-900/50 p-6 sm:p-8 rounded-lg border border-white/10">
                            <p className="text-sm sm:text-base text-gray-300 mb-6 italic lg:text-lg">
                                "We are not just building a company; we are building the infrastructure for the next industrial revolution."
                            </p>
                            <p className="text-xs sm:text-base text-gray-400 leading-relaxed mb-6">
                                With over 20 years of experience in high-precision manufacturing and software architecture, [Founder Name] envisioned TIMA as the answer to the fragmented industrial landscape. His leadership has steered the company from a boutique engineering firm to a global conglomerate.
                            </p>

                            <h5 className="font-semibold text-white mb-4 text-sm sm:text-base">Key Achievements</h5>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-black/40 p-4 rounded text-center">
                                    <span className="block text-xl sm:text-2xl font-bold text-tima-gold">30+</span>
                                    <span className="text-xs sm:text-sm text-gray-500">Patents Filed</span>
                                </div>
                                <div className="bg-black/40 p-4 rounded text-center">
                                    <span className="block text-xl sm:text-2xl font-bold text-tima-gold">5B+</span>
                                    <span className="text-xs sm:text-sm text-gray-500">Asset Valuation</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    )
}
