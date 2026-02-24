import React from 'react'

const capabilities = ["Precision CNC", "Additive Manufacturing", "PCB Assembly", "Industrial AI", "Cloud IoT", "Embedded Systems"]
const partners = [
    { name: "Partner A", type: "Manufacturing" },
    { name: "Partner B", type: "Technology" },
    { name: "Partner C", type: "Logistics" },
    { name: "Partner D", type: "Financial" },
]

export function Capabilities() {
    return (
        <section className="py-12 md:py-24 bg-tima-dark text-white">
            <div className="container mx-auto px-6">

                {/* Capabilities */}
                <div className="mb-12 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Present Capabilities</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {capabilities.map((cap, idx) => (
                            <div key={idx} className="px-6 py-3 rounded-full border border-tima-gold text-tima-gold hover:bg-tima-gold hover:text-black transition-colors cursor-default font-semibold">
                                {cap}
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-900 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4">Manufacturing</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>• 500,000 sqft Production Floor</li>
                                <li>• 6-Axis Robotic Arms Farm</li>
                                <li>• ISO 9001:2015 Certified</li>
                            </ul>
                        </div>
                        <div className="bg-gray-900 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4">Digital Systems</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>• Proprietary Neural Engine</li>
                                <li>• Real-time Edge Analytics</li>
                                <li>• Bank-grade Security Standard</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Partners */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-200">Trusted By Global Partners</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70 hover:opacity-100 transition-opacity">
                        {/* Placeholder for Logos */}
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-24 bg-white/10 rounded flex items-center justify-center text-gray-500 font-bold text-xl uppercase tracking-widest hover:bg-white/20 transition-colors">
                                Partner {i}
                            </div>
                        ))}
                        {[5, 6, 7, 8].map((i) => (
                            <div key={i} className="h-24 bg-white/10 rounded flex items-center justify-center text-gray-500 font-bold text-xl uppercase tracking-widest hover:bg-white/20 transition-colors">
                                Partner {i}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
