import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Headphones, Sun, Moon, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useStore } from '../../stores/useStore'
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
    const { theme, toggleTheme } = useStore()

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
            className={`fixed top-0 left-0 right-[10px] z-50 pointer-events-auto transition-all duration-700 delay-75 ${isScrolled
                ? (theme === 'light' ? 'bg-white/90 backdrop-blur-md py-0.5 text-gray-900' : 'bg-[#1a2234]/85 backdrop-blur-md py-0.5')
                : (theme === 'light' ? 'bg-transparent pt-3 pb-1 text-gray-900' : 'bg-transparent xl:bg-gradient-to-b xl:from-black/70 xl:via-black/70 xl:to-transparent pt-3 pb-1 xl:pb-16')
                }`}
            onMouseLeave={() => setActiveDropdown(null)}
        >


            {/* Scrolling Marquee Banner — mobile/tablet only, hidden on xl desktop */}
            {!isScrolled && (
                <div className={`xl:hidden overflow-hidden py-2 text-[11px] sm:text-[12px] md:text-[13px] ${theme === 'light' ? 'text-gray-600' : 'text-white/90'}`}>
                    <div className="marquee-scroll whitespace-nowrap font-medium tracking-wide">
                        <span className="inline-block">
                            <span className="px-10 sm:px-12">hello every one</span>
                            <span className="px-10 sm:px-12">hello every one</span>
                            <span className="px-10 sm:px-12">hello every one</span>
                            <span className="px-10 sm:px-12">hello every one</span>
                        </span>
                        <span className="inline-block">
                            <span className="px-10 sm:px-12">hello every one</span>
                            <span className="px-10 sm:px-12">hello every one</span>
                            <span className="px-10 sm:px-12">hello every one</span>
                            <span className="px-10 sm:px-12">hello every one</span>
                        </span>
                    </div>
                </div>
            )}

            {/* Desktop Layout Wrapper */}
            <div className={`max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 xl:px-24 2xl:px-40 flex items-center justify-between transition-all duration-700 ${isScrolled ? 'h-12 sm:h-14 md:h-16' : 'h-16 sm:h-20 md:h-24 xl:h-28'}`}>
                {/* Left Column: Logo */}
                <div className="flex-shrink-0 flex items-center pr-4 sm:pr-6 md:pr-8 xl:pr-8 2xl:pr-12">
                    <img
                        src={isScrolled ? scrolledLogo : defaultLogo}
                        onError={(e) => { e.target.style.display = 'none' }}
                        alt="TIMA Logo"
                        className={`w-auto object-contain mr-2 sm:mr-3 md:mr-4 drop-shadow-md transition-all duration-700 ${isScrolled ? 'h-10 sm:h-12 md:h-14 xl:h-14' : 'h-14 sm:h-18 md:h-20 xl:h-[90px]'}`}
                    />
                </div>

                {/* Right Column: Rows */}
                <div className="hidden xl:flex flex-col justify-center h-full flex-1 min-w-0 xl:pl-2 2xl:pl-4">
                    {/* Top Row: Utilities - hidden when scrolled */}
                    {!isScrolled && (
                        <div className={`flex justify-between items-center pt-3 pb-6 border-b text-[12px] sm:text-[13px] ${theme === 'light' ? 'border-gray-300 text-gray-700' : 'border-white text-white/95'}`}>
                            <div className="flex-1 overflow-hidden mr-6">
                                <div className="marquee-scroll whitespace-nowrap font-medium tracking-wide">
                                    <span className="inline-block">
                                        <span className="px-12">hello every one</span>
                                        <span className="px-12">hello every one</span>
                                        <span className="px-12">hello every one</span>
                                        <span className="px-12">hello every one</span>
                                    </span>
                                    <span className="inline-block">
                                        <span className="px-12">hello every one</span>
                                        <span className="px-12">hello every one</span>
                                        <span className="px-12">hello every one</span>
                                        <span className="px-12">hello every one</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 sm:gap-6 font-medium flex-shrink-0">
                                <a href="#" className={`flex items-center gap-1 transition-colors ${theme === 'light' ? 'hover:text-gray-400' : 'hover:text-white/70'}`}>eB2B <ChevronDown size={14} className="inline" /></a>
                                <a href="#" className={`transition-colors ${theme === 'light' ? 'hover:text-gray-400' : 'hover:text-white/70'}`}>Fraud Alert</a>
                                <a href="#" className={`transition-colors ${theme === 'light' ? 'hover:text-gray-400' : 'hover:text-white/70'}`}>Contact Us</a>
                            </div>
                        </div>
                    )}

                    {/* Bottom Row: Nav Links + Icons */}
                    <div className={`flex justify-between items-center ${isScrolled ? 'py-0' : 'pt-4'}`}>
                        <div className="flex items-center gap-3 xl:gap-4 2xl:gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onMouseEnter={() => setActiveDropdown(link.label)}
                                    className={`flex items-center gap-1.5 text-[13px] xl:text-[14px] 2xl:text-[16px] font-medium tracking-wide whitespace-nowrap transition-colors ${activeDropdown === link.label
                                        ? (theme === 'light' ? 'text-gray-900' : 'text-white')
                                        : (theme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white')
                                        }`}
                                >
                                    {link.label}
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''} ${theme === 'light' ? 'text-gray-400' : 'text-white/70'}`}
                                    />
                                </button>
                            ))}
                        </div>
                        <div className={`flex items-center gap-3 xl:gap-4 ml-4 xl:ml-6 2xl:ml-16 ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}>
                            <button className={'hover:text-white/70 transition-colors p-1'}>
                                <Headphones size={18} strokeWidth={1.5} />
                            </button>
                            <button onClick={toggleTheme} className={'hover:text-white/70 transition-colors p-1 focus:outline-none'} title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                                {theme === 'dark' ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
                            </button>

                        </div>
                    </div>
                </div>

                {/* Mobile menu toggle */}
                <button
                    className={`xl:hidden p-2 ml-auto self-center transition-colors ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
                    onClick={() => { setMobileOpen(!mobileOpen); setMobileExpanded(null) }}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Desktop Dropdown Panel */}
            {activeDropdown && (
                <div
                    className="hidden xl:block absolute left-0 right-0 bg-white shadow-xl border-t-2 border-tima-gold"
                    style={{ animation: 'slideDown 0.2s ease-out' }}
                >
                    <div className="max-w-7xl mx-auto px-10 py-5">
                        <div className="flex gap-12">
                            {navLinks.find(l => l.label === activeDropdown)?.items.map((item) => (
                                item === 'Overview' ? (
                                    <Link
                                        key={item}
                                        to="/overview"
                                        className="text-sm text-gray-700 hover:text-tima-gold transition-colors font-medium whitespace-nowrap py-1"
                                        onClick={() => setActiveDropdown(null)}
                                    >
                                        {item}
                                    </Link>
                                ) : (
                                    <a
                                        key={item}
                                        href="#"
                                        className="text-sm text-gray-700 hover:text-tima-gold transition-colors font-medium whitespace-nowrap py-1"
                                        onClick={() => setActiveDropdown(null)}
                                    >
                                        {item}
                                    </a>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile menu */}
            {mobileOpen && (
                <div className={`xl:hidden border-t px-4 sm:px-6 py-4 max-h-[70vh] overflow-y-auto ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-[#1a2234] border-white/10'}`}>
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
                                        item === 'Overview' ? (
                                            <Link
                                                key={item}
                                                to="/overview"
                                                className="block py-2 text-xs text-white/60 hover:text-tima-gold transition-colors"
                                                onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                                            >
                                                {item}
                                            </Link>
                                        ) : (
                                            <a
                                                key={item}
                                                href="#"
                                                className="block py-2 text-xs text-white/60 hover:text-tima-gold transition-colors"
                                            >
                                                {item}
                                            </a>
                                        )
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
