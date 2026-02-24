import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Preload } from '@react-three/drei'
import { Lights } from './Lights'
import { useStore } from '../../stores/useStore'

export function Scene() {
    const dimension = useStore((state) => state.dimension)

    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
            className="absolute inset-0 z-0 h-full w-full pointer-events-none" // pointer-events-none allows clicks to pass through to UI if needed, but we might want interaction later
        >
            <PerspectiveCamera makeDefault position={[0, 1.5, 5]} fov={50} />

            <Lights dimension={dimension} />

            <Suspense fallback={null}>
                {/* Environment preset based on dimension? */}
                <Environment preset={dimension === 'manufacturing' ? 'city' : 'night'} />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}
