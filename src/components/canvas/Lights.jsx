import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export function Lights({ dimension }) {
    const lightRef = useRef()

    useFrame(() => {
        if (lightRef.current) {
            // Animate light intensity or color if needed during transitions
        }
    })

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight
                ref={lightRef}
                position={[5, 5, 5]}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            {dimension === 'digital' && (
                <pointLight position={[-2, 2, -2]} color="#00ffff" intensity={2} distance={10} />
            )}
            {dimension === 'manufacturing' && (
                <pointLight position={[-2, 2, -2]} color="#ffaa00" intensity={1} distance={10} />
            )}
        </>
    )
}
