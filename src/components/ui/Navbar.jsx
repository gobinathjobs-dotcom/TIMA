import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Search, Headphones, Sun, Menu, X, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import defaultLogo from '../../assets/tima-logo.png'
import scrolledLogo from '../../assets/Logo1.png'

const navLinks = [
    {
        label: 'About',
        items: ['Overview', 'Leadership', 'Board of Directors', 'Corporate Governance']
    },
    {
        label: 'Businesses',
        items: ['Manufacturing', 'Digital Solutions', 'Industrial Automation', 'IoT & Edge Computing']
    },
    {
        label: 'Sustainability',
        items: ['ESG Framework', 'Environment', 'Social Impact', 'Reports & Disclosures']
    },
    {
        label: 'Investors',
        items: ['Financial Reports', 'Stock Information', 'Annual Reports', 'Shareholder Services']
    },
    {
        label: 'Careers',
        items: ['Careers', 'Search & Apply', 'Working at TIMA']
    },
    {
        label: 'News & Media',
        items: ['Press Releases', 'Media Gallery', 'In the News', 'Events']
    },
]

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [mobileExpanded, setMobileExpanded] = useState(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        const main = document.getElementById('main-scroll')
        if (!main) return
        const handler = () => setIsScrolled(main.scrollTop > 50)
        main.addEventListener('scroll', handler, { passive: true })
        return () => main.removeEventListener('scroll', handler)
    }, [])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setActiveDropdown(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const toggleMobileExpanded = (label) => {
        setMobileExpanded(mobileExpanded === label ? null : label)
    }

    return (
        <motion.nav
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.0, delay: 0.2, ease: "easeInOut" }}
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 pointer-events-auto transition-colors duration-700 delay-75 ${isScrolled
                ? 'bg-[#1a2234] shadow-xl py-0.5'
                : 'bg-transparent pt-3 pb-1'
                }`}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            {/* Desktop Layout Wrapper */}
            <div className={`max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 flex items-center justify-between transition-all duration-700 ${isScrolled ? 'h-12 sm:h-14 md:h-16' : 'h-16 sm:h-20 md:h-28'}`}>
                {/* Left Column: Logo */}
                <div className="flex-shrink-0 flex items-center pr-4 sm:pr-6 md:pr-8 lg:pr-10">
                    <img
                        src={isScrolled ? scrolledLogo : defaultLogo}
                        onError={(e) => { e.target.style.display = 'none' }}
                        alt="TIMA Logo"
                        className={`w-auto object-contain mr-2 sm:mr-3 md:mr-4 drop-shadow-md transition-all duration-700 ${isScrolled ? 'h-10 sm:h-12 md:h-14 lg:h-16' : 'h-14 sm:h-20 md:h-24 lg:h-[140px]'}`}
                    />
                </div>

                {/* Right Column: Rows */}
                <div className="hidden lg:flex flex-col justify-center h-full ml-auto">
                    {/* Top Row: Utilities - hidden when scrolled */}
                    {!isScrolled && (
                        <div className="flex justify-between items-center pt-3 pb-6 border-b border-white text-[12px] sm:text-[13px] text-white/95">
                            <div className="flex items-center gap-4 sm:gap-6 font-medium">
                                <span className="flex items-center gap-1.5 cursor-pointer hover:text-red-400 transition-colors">
                                    NSE <ArrowDown size={14} className="text-red-500" strokeWidth={2.5} /> <span className="text-white font-semibold tracking-wide">₹1,420.00</span> <span className="text-white/80">(-0.56%)</span>
                                </span>
                                <span className="flex items-center gap-1.5 cursor-pointer hover:text-red-400 transition-colors">
                                    BSE <ArrowDown size={14} className="text-red-500" strokeWidth={2.5} /> <span className="text-white font-semibold tracking-wide">₹1,419.95</span> <span className="text-white/80">(-0.56%)</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-4 sm:gap-6 font-medium">
                                <a href="#" className="flex items-center gap-1 hover:text-white/70 transition-colors">eB2B <ChevronDown size={14} className="inline" /></a>
                                <a href="#" className="hover:text-white/70 transition-colors">Fraud Alert</a>
                                <a href="#" className="hover:text-white/70 transition-colors">Contact Us</a>
                            </div>
                        </div>
                    )}

                    {/* Bottom Row: Nav Links + Icons */}
                    <div className={`flex justify-between items-center ${isScrolled ? 'py-0' : 'pt-4'}`}>
                        <div className="flex items-center gap-3 lg:gap-6 2xl:gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onMouseEnter={() => setActiveDropdown(link.label)}
                                    className={`flex items-center gap-2 text-[13px] lg:text-[16px] font-medium tracking-wide transition-colors ${activeDropdown === link.label
                                        ? 'text-white'
                                        : 'text-white/80 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''} text-white/70`}
                                    />
                                </button>
                            ))}
                        </div>
                        <div className={`flex items-center gap-3 lg:gap-5 ml-4 lg:ml-8 2xl:ml-16 text-white`}>
                            <button className={'hover:text-white/70 transition-colors p-1'}>
                                <Headphones size={18} strokeWidth={1.5} />
                            </button>
                            <button className={'hover:text-white/70 transition-colors p-1 focus:outline-none'}>
                                <Sun size={18} strokeWidth={1.5} />
                            </button>
                            <button className={'hover:text-white/70 transition-colors p-1'}>
                                <Search size={18} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu toggle */}
                <button
                    className={`lg:hidden p-2 ml-auto self-center transition-colors text-white`}
                    onClick={() => { setMobileOpen(!mobileOpen); setMobileExpanded(null) }}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Desktop Dropdown Panel */}
            {activeDropdown && (
                <div
                    className="hidden lg:block absolute left-0 right-0 bg-white shadow-xl border-t-2 border-tima-gold"
                    style={{ animation: 'slideDown 0.2s ease-out' }}
                >
                    <div className="max-w-7xl mx-auto px-10 py-5">
                        <div className="flex gap-12">
                            {navLinks.find(l => l.label === activeDropdown)?.items.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-sm text-gray-700 hover:text-tima-gold transition-colors font-medium whitespace-nowrap py-1"
                                    onClick={() => setActiveDropdown(null)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-[#1a2234] border-t border-white/10 px-4 sm:px-6 py-4 max-h-[70vh] overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.label}>
                            <button
                                onClick={() => toggleMobileExpanded(link.label)}
                                className={`flex items-center justify-between w-full py-3 transition-colors border-b border-white/5 text-xs sm:text-sm font-bold ${mobileExpanded === link.label ? 'text-tima-gold' : 'text-white/90 hover:text-tima-gold'
                                    }`}
                            >
                                {link.label}
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${mobileExpanded === link.label ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {mobileExpanded === link.label && (
                                <div className="pl-4 pb-2">
                                    {link.items.map((item) => (
                                        <a
                                            key={item}
                                            href="#"
                                            className="block py-2 text-xs text-white/60 hover:text-tima-gold transition-colors"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex gap-4 pt-4 text-xs text-white/60">
                        <a href="#" className="hover:text-tima-gold">eB2B</a>
                        <a href="#" className="hover:text-tima-gold">Fraud Alert</a>
                        <a href="#" className="hover:text-tima-gold">Contact Us</a>
                    </div>
                </div>
            )}
        </motion.nav>
    )
}
