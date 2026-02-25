import React from 'react'

export function Contact() {
    return (
        <div className="bg-black text-white">
            {/* Social Impact */}
            <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-r from-green-900/20 to-black">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-green-400">TIMA Social Foundation</h2>
                        <p className="text-xs sm:text-base text-gray-300 mb-6 leading-relaxed">
                            12-We believe that technology should empower humanity, not just industry. Through our rural innovation labs and educational grants, we are bridging the digital divide.
                        </p>
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            <div className="bg-white/5 p-4 rounded border-l-2 border-green-500">
                                <h3 className="text-lg sm:text-2xl font-bold text-white">10k+</h3>
                                <p className="text-xs sm:text-sm text-gray-400">Students Up-skilled</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded border-l-2 border-green-500">
                                <h3 className="text-lg sm:text-2xl font-bold text-white">50+</h3>
                                <p className="text-xs sm:text-sm text-gray-400">Rural Labs</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-[200px] sm:h-[300px] bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-sm sm:text-base">
                        [Impact Image Placeholder]
                    </div>
                </div>
            </section>

            {/* Business Handshake / Contact */}
            <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 relative">
                <div className="container mx-auto max-w-4xl bg-gray-900/80 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center text-tima-gold">Join the Revolution</h2>
                    <p className="text-center text-xs sm:text-base text-gray-400 mb-8 md:mb-12">Partnership Inquiries & Strategic Alliances</p>

                    <form className="space-y-4 sm:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Company Name</label>
                                <input type="text" className="bg-black/50 border border-white/10 rounded p-3 text-xs sm:text-base text-white focus:border-tima-gold outline-none transition-colors min-h-[44px]" placeholder="Enter company name" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Contact Person</label>
                                <input type="text" className="bg-black/50 border border-white/10 rounded p-3 text-xs sm:text-base text-white focus:border-tima-gold outline-none transition-colors min-h-[44px]" placeholder="Enter your name" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Email</label>
                                <input type="email" className="bg-black/50 border border-white/10 rounded p-3 text-xs sm:text-base text-white focus:border-tima-gold outline-none transition-colors min-h-[44px]" placeholder="contract@company.com" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Partnership Type</label>
                                <select className="bg-black/50 border border-white/10 rounded p-3 text-xs sm:text-base text-white focus:border-tima-gold outline-none transition-colors min-h-[44px]">
                                    <option>OEM Manufacturing</option>
                                    <option>Technology Integration</option>
                                    <option>Investment</option>
                                    <option>Distribution</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Message</label>
                            <textarea rows="4" className="bg-black/50 border border-white/10 rounded p-3 text-xs sm:text-base text-white focus:border-tima-gold outline-none transition-colors min-h-[120px]" placeholder="Tell us about your proposal..."></textarea>
                        </div>

                        <button className="w-full py-3 sm:py-4 bg-tima-gold text-black font-bold rounded hover:bg-white transition-colors uppercase tracking-widest text-xs sm:text-sm md:text-base min-h-[44px]">
                            Initiate Handshake
                        </button>
                    </form>
                </div>
            </section>

            <footer className="py-6 sm:py-8 bg-black text-center text-xs sm:text-sm text-gray-600 border-t border-white/5">
                <p>&copy; {new Date().getFullYear()} TIMA Group. All Rights Reserved.</p>
            </footer>
        </div>
    )
}
