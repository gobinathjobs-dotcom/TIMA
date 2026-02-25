import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Navbar } from './Navbar'

const slides = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
]

export function Hero() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col">

            {/* Background Images with Transformation */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <img
                        src={slides[current]}
                        alt="Background"
                        className="w-full h-full object-cover [filter:blur(0.5px)]"
                    />
                    {/* Left-side gradient overlay (Reliance-style) for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Navbar */}
            <Navbar />

            {/* Spacer to push content down */}
            {/* removed flex-1 to center content better, or replaced with just pt */}

            {/* "Growth is Life" Headline + CTAs */}
            <div className="relative z-10 px-3 sm:px-6 md:px-12 lg:px-24 xl:px-32 pb-8 sm:pb-12 md:pb-24 lg:pb-40 flex-1 flex flex-col justify-end max-w-[1920px] mx-auto w-full">
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[110px] text-white drop-shadow-2xl leading-tight tracking-tight"
                    style={{ fontFamily: "'Playfair Display', 'Georgia', serif", fontWeight: 400 }}
                >
                    Growth is Life
                </motion.h1>

                {/* Gold underline */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                    className="w-20 sm:w-28 md:w-40 lg:w-64 xl:w-80 h-[2px] bg-[#dcb671] mt-2 sm:mt-3 md:mt-4 lg:mt-6 mb-4 sm:mb-6 md:mb-10 lg:mb-12"
                />

                {/* CTA Buttons - Reliance style (both white bg, dark text) */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 md:gap-4 lg:gap-8"
                >
                    <a
                        href="#about"
                        className="group flex items-center justify-center gap-2 px-5 sm:px-7 md:px-10 lg:px-12 py-2 sm:py-2.5 md:py-3 lg:py-[10px] bg-transparent border border-white/70 rounded-[6px] text-white text-xs sm:text-sm md:text-base lg:text-base font-medium tracking-wide hover:bg-white hover:text-black hover:border-white transition-colors duration-300"
                    >
                        <span>about us</span>
                        <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform hidden sm:inline" />
                    </a>
                    <a
                        href="#timeline"
                        className="group flex items-center justify-center gap-2 px-5 sm:px-7 md:px-10 lg:px-12 py-2 sm:py-2.5 md:py-3 lg:py-[10px] bg-transparent border border-white/70 rounded-[6px] text-white text-xs sm:text-sm md:text-base lg:text-base font-medium tracking-wide hover:bg-white hover:text-black hover:border-white transition-colors duration-300"
                    >
                        <span>our history</span>
                        <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform hidden sm:inline" />
                    </a>
                </motion.div>
            </div>

        </section>
    )
}
