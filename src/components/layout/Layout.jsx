import React from 'react'
import { Scene } from '../canvas/Scene'
import { useStore } from '../../stores/useStore'

export function Layout({ children }) {
    const theme = useStore((state) => state.theme)

    return (
        <div className={`relative w-full h-screen overflow-hidden transition-colors duration-500 ${theme === 'light'
            ? 'bg-white text-gray-900'
            : 'bg-tima-dark text-tima-white'
            }`}>

            {/* 3D Canvas — hidden in light mode for clean look */}
            {theme === 'dark' && (
                <div id="canvas-container" className="absolute inset-0 z-0">
                    <Scene />
                </div>
            )}

            {/* UI Overlay */}
            <main id="main-scroll" className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden">
                {/* Enable pointer events for children content */}
                <div className="pointer-events-auto min-h-full">
                    {children}
                </div>
            </main>
        </div>
    )
}
