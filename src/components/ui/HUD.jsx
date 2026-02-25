import React from 'react'
import { useStore } from '../../stores/useStore'
import { Layers, Globe } from 'lucide-react'
import { clsx } from 'clsx'

export function HUD() {
    const { dimension, setDimension } = useStore()

    return (
        <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50 flex gap-2">
            <button
                onClick={() => setDimension('manufacturing')}
                className={clsx(
                    "p-2 sm:p-3 rounded-full transition-all duration-300 border border-tima-white/20 backdrop-blur-md",
                    dimension === 'manufacturing' ? "bg-tima-gold text-tima-black" : "bg-black/50 text-tima-white hover:bg-white/10"
                )}
                title="Manufacturing Dimension"
            >
                <Layers size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button
                onClick={() => setDimension('digital')}
                className={clsx(
                    "p-2 sm:p-3 rounded-full transition-all duration-300 border border-tima-white/20 backdrop-blur-md",
                    dimension === 'digital' ? "bg-cyan-500 text-black" : "bg-black/50 text-tima-white hover:bg-white/10"
                )}
                title="Digital Dimension"
            >
                <Globe size={20} className="sm:w-6 sm:h-6" />
            </button>
        </div>
    )
}
