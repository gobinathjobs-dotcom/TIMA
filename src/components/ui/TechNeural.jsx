import React from 'react';
import treeImage from '../../assets/SJF-F.011441.jpg';

export function TechNeural() {
    return (
        <section className="py-12 md:py-20 w-full flex flex-col items-center justify-center px-4 bg-[#FDF6E9]">
            <div className="max-w-[1920px] mx-auto flex flex-col items-center">

                <h2
                    className="text-center font-black uppercase flex flex-wrap justify-center gap-x-3 md:gap-x-6 gap-y-1 bg-clip-text text-transparent bg-cover bg-center"
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 120px)',
                        lineHeight: '0.9',
                        letterSpacing: '0.05em',
                        fontFamily: 'Impact, "Arial Black", sans-serif',
                        backgroundImage: `url(${treeImage})`,
                        backgroundSize: '200% auto',
                        animation: 'panBackground 25s ease-in-out infinite',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    <span>TECH</span>
                    <span>NEURAL</span>
                    <span>HANDSHAKE</span>
                </h2>

            </div>
        </section>
    );
}
