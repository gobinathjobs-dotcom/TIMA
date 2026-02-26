import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '../components/ui/Navbar'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useStore } from '../stores/useStore'

export function Overview() {
    const theme = useStore((state) => state.theme)
    const light = theme === 'light'

    return (
        <div className={`relative w-full min-h-screen transition-colors duration-500 ${light ? 'bg-white text-gray-900' : 'bg-tima-dark text-tima-white'}`}>
            {/* Navbar */}
            <Navbar />

            {/* Page Content */}
            <div className="pt-32 sm:pt-40 pb-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 max-w-[1920px] mx-auto">
                {/* Back link */}
                <Link
                    to="/"
                    className={`inline-flex items-center gap-2 text-sm transition-colors mb-8 ${light ? 'text-gray-500 hover:text-tima-gold' : 'text-white/60 hover:text-tima-gold'}`}
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>

                {/* Page Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-5xl md:text-6xl font-bold text-tima-gold mb-8 border-l-4 border-tima-gold pl-6"
                >
                    Overview
                </motion.h1>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`rounded-2xl p-6 sm:p-10 md:p-14 ${light
                        ? 'bg-gray-50 border border-gray-200'
                        : 'bg-white/5 backdrop-blur-sm border border-white/10'
                        }`}
                >
                    <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${light ? 'text-gray-700' : 'text-gray-300'}`}>
                        Great, glad it's working the way you want! 🎉 The scrollbar is now normal-sized, always visible, and the navbar doesn't cover it. Let me know if you need anything else!
                    </p>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className={`py-6 sm:py-8 text-center text-xs sm:text-sm border-t ${light
                ? 'bg-gray-50 text-gray-500 border-gray-200'
                : 'bg-black text-gray-600 border-white/5'
                }`}>
                <p>&copy; {new Date().getFullYear()} TIMA Group. All Rights Reserved.</p>
            </footer>
        </div>
    )
}
