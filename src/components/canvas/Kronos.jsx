import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useStore } from '../../stores/useStore'

export function Kronos(props) {
    const meshRef = useRef()
    const dimension = useStore((state) => state.dimension)

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5
        }
    })

    return (
        <group {...props} dispose={null}>
            {/* Placeholder Mesh */}
            <mesh ref={meshRef} position={[0, 1, 0]}>
                <boxGeometry args={[1, 2, 1]} />
                <meshStandardMaterial
                    color={dimension === 'manufacturing' ? '#D4AF37' : '#00ffff'}
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>
        </group>
    )
}
