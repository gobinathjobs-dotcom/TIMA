import React, { useRef, useEffect, useState } from 'react'
import GradientText from './GradientText'

// Use Vite's import.meta.glob to synchronously load the image URLs from the assets folder
const imagesGlob = import.meta.glob('../../assets/Video Project 1222_000/*.jpg', { eager: true })
const imagePaths = Object.keys(imagesGlob).sort().map(key => imagesGlob[key].default)

export function ScrollSequence() {
    const canvasRef = useRef(null)
    const containerRef = useRef(null)
    const [images, setImages] = useState([])
    const [loaded, setLoaded] = useState(false)

    // Preload images into memory so that the scroll animation is perfectly smooth
    useEffect(() => {
        let loadedCount = 0;
        const imgArray = []
        imagePaths.forEach((path, index) => {
            const img = new Image()
            img.src = path
            img.onload = () => {
                loadedCount++
                if (loadedCount === imagePaths.length) {
                    setLoaded(true)
                }
            }
            imgArray[index] = img
        })
        setImages(imgArray)
    }, [])

    useEffect(() => {
        if (!loaded || !canvasRef.current || !containerRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const mainScroll = document.getElementById('main-scroll')

        if (!mainScroll) return

        let animationFrameId = null;
        let currentFrame = 0;
        let targetFrame = 0;

        const updateSize = () => {
            const rect = canvas.getBoundingClientRect()
            const dpr = window.devicePixelRatio || 1

            // Multiply internal canvas resolution by the screen's DPI for ultra-crisp image quality
            canvas.width = rect.width * dpr
            canvas.height = rect.height * dpr

            ctx.scale(dpr, dpr)
            ctx.imageSmoothingEnabled = true
            ctx.imageSmoothingQuality = 'high'

            // Force a redraw at the new scale immediately
            drawImage(Math.round(currentFrame))
        }

        const drawImage = (index) => {
            if (!images[index] || images[index].naturalWidth === 0) return
            const img = images[index]

            const rect = canvas.getBoundingClientRect()

            // Draw cleanly mapped to the physical CSS dimensions we scaled the context to
            // This prevents blurriness while maintaining the 1920x357 container box
            ctx.clearRect(0, 0, rect.width, rect.height)
            ctx.drawImage(img, 0, 0, rect.width, rect.height)
        }

        const handleScroll = () => {
            const containerBox = containerRef.current.getBoundingClientRect()

            // The banner travels from the bottom of the screen to the top of the screen
            // Total visible travel distance = viewport height + container height
            const totalDistance = window.innerHeight + containerBox.height

            // How far along that path the container's TOP is (0 means hasn't entered, totalDistance means fully exited)
            const currentScroll = window.innerHeight - containerBox.top

            let progress = currentScroll / totalDistance
            progress = Math.max(0, Math.min(1, progress))

            // Update the TARGET frame. We don't draw immediately, the loop handles that smoothly
            targetFrame = progress * (imagePaths.length - 1)
        }

        const renderLoop = () => {
            // Linear Interpolation (Lerp) to smoothly transition towards the target frame
            currentFrame += (targetFrame - currentFrame) * 0.1

            // Draw the interpolated frame index for buttery smooth visuals
            const roundFrame = Math.round(currentFrame)
            drawImage(roundFrame)

            animationFrameId = requestAnimationFrame(renderLoop)
        }

        window.addEventListener('resize', updateSize)
        mainScroll.addEventListener('scroll', handleScroll, { passive: true })

        // Initial setup and startup loop
        updateSize()
        handleScroll()
        renderLoop()

        return () => {
            window.removeEventListener('resize', updateSize)
            mainScroll.removeEventListener('scroll', handleScroll)
            if (animationFrameId) cancelAnimationFrame(animationFrameId)
        }
    }, [loaded, images])

    return (
        // Removing the 300vh sticky height and letting the banner take up only its exact required responsive space.
        <section ref={containerRef} className="relative w-full max-w-[1920px] mx-auto aspect-[1920/357] overflow-hidden bg-black">
            {!loaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm text-tima-gold font-medium">
                    Loading sequence...
                </div>
            )}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0" />

            {/* Center the Gradient Text perfectly over the animated sequence */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <GradientText
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    animationSpeed={3.5}
                    showBorder={false}
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl uppercase tracking-wider font-bold pointer-events-auto break-words text-center px-2 sm:px-4"
                >
                    Tech Neural Handshake
                </GradientText>
            </div>
        </section>
    )
}
