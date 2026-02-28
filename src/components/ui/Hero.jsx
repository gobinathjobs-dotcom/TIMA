import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Navbar } from './Navbar'

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col">


            {/* Navbar */}
            <Navbar />

            {/* Spacer to push content down */}
            {/* removed flex-1 to center content better, or replaced with just pt */}

            {/* "Growth is Life" Headline + CTAs */}
            <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 pb-36 sm:pb-16 md:pb-24 lg:pb-40 flex-1 flex flex-col justify-end items-center sm:items-start text-center sm:text-left max-w-[1920px] mx-auto w-full">
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[110px] text-white drop-shadow-2xl leading-tight tracking-tight"
                    style={{ fontFamily: "'Playfair Display', 'Georgia', serif", fontWeight: 400 }}
                >
                    Growth is Life
                </motion.h1>

                {/* Gold underline */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                    className="w-32 sm:w-48 md:w-64 lg:w-80 h-[2px] bg-[#dcb671] mt-3 sm:mt-6 mb-6 sm:mb-8 md:mb-12 mx-auto sm:mx-0"
                />

                {/* CTA Buttons - Reliance style (both white bg, dark text) */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 justify-center sm:justify-start w-full sm:w-auto"
                >
                    <a
                        href="#details"
                        className="group flex items-center justify-center gap-2 px-6 sm:px-10 md:px-12 py-3 sm:py-3 md:py-[10px] bg-transparent border border-white/70 rounded-[6px] text-white text-sm sm:text-base md:text-base font-medium tracking-wide hover:bg-white hover:text-black hover:border-white transition-colors duration-300"
                    >
                        <span>Details</span>
                        <ArrowRight size={18} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform hidden sm:inline" />
                    </a>
                </motion.div>
            </div>

        </section>
    )
}
