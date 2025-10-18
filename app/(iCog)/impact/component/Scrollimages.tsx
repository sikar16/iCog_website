"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

interface WhereWeBegunProps {
    onScrollComplete?: () => void
}

export default function WhereWeBegun({ onScrollComplete }: WhereWeBegunProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [hasTriggered, setHasTriggered] = useState(false)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (latest >= 0.95 && !hasTriggered && onScrollComplete) {
                setHasTriggered(true)
                onScrollComplete()
            }
        })
        return unsubscribe
    }, [scrollYProgress, hasTriggered, onScrollComplete])
    const centerSize = useTransform(scrollYProgress, [0, 0.5, 1], [475, 475, 250])

    const textOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1])
    const textScale = useTransform(scrollYProgress, [0.8, 0.9], [0.8, 1])
    const centerX = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, -250])
    const centerY = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, -180])
    const centerScale = useTransform(scrollYProgress, [0, 0, 1], [1, 1, 0.6])
    const centerOpacity = useTransform(scrollYProgress, [0, 1], [1, 1])

    const bgPhoto1X = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, 400])
    const bgPhoto1Y = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, -290])
    const bgPhoto1Scale = useTransform(scrollYProgress, [0.2, 0.6, 1], [0.3, 0.5, 0.62])
    const bgPhoto1Opacity = useTransform(scrollYProgress, [0.2, 0.25, 1], [0, 1, 1])

    const bgPhoto2X = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, -300])
    const bgPhoto2Y = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, -250])
    const bgPhoto2Scale = useTransform(scrollYProgress, [0.2, 0.6, 1], [0.3, 0.5, 0.58])
    const bgPhoto2Opacity = useTransform(scrollYProgress, [0.2, 0.25, 1], [0, 1, 1])

    const bgPhoto3X = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, 380])
    const bgPhoto3Y = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, 200])
    const bgPhoto3Scale = useTransform(scrollYProgress, [0.2, 0.6, 1], [0.3, 0.5, 0.59])
    const bgPhoto3Opacity = useTransform(scrollYProgress, [0.2, 0.25, 1], [0, 1, 1])

    const bgPhoto4X = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, -400])
    const bgPhoto4Y = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, 180])
    const bgPhoto4Scale = useTransform(scrollYProgress, [0.2, 0.6, 1], [0.3, 0.5, 0.61])
    const bgPhoto4Opacity = useTransform(scrollYProgress, [0.2, 0.25, 1], [0, 1, 1])

    const bgPhoto5X = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, 350])
    const bgPhoto5Y = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, -150])
    const bgPhoto5Scale = useTransform(scrollYProgress, [0.2, 0.6, 1], [0.3, 0.5, 0.57])
    const bgPhoto5Opacity = useTransform(scrollYProgress, [0.2, 0.25, 1], [0, 1, 1])

    // const bgPhoto6X = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, -350])
    // const bgPhoto6Y = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, -120])
    // const bgPhoto6Scale = useTransform(scrollYProgress, [0.2, 0.6, 1], [0.3, 0.5, 0.63])
    // const bgPhoto6Opacity = useTransform(scrollYProgress, [0.2, 0.25, 1], [0, 1, 1])

    const bgPhoto7X = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, 320])
    const bgPhoto7Y = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, 150])
    const bgPhoto7Scale = useTransform(scrollYProgress, [0.2, 0.6, 1], [0.3, 0.5, 0.58])
    const bgPhoto7Opacity = useTransform(scrollYProgress, [0.2, 0.25, 1], [0, 1, 1])

    const bgPhoto8X = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, -320])
    const bgPhoto8Y = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 0, 120])
    const bgPhoto8Scale = useTransform(scrollYProgress, [0.2, 0.6, 1], [0.3, 0.5, 0.6])
    const bgPhoto8Opacity = useTransform(scrollYProgress, [0.2, 0.25, 1], [0, 1, 1])

    return (
        <div ref={containerRef} className="relative h-[180vh] bg-background">
            <div className="hidden sm:flex sticky top-0 h-screen  items-center justify-center overflow-hidden pt-[40px]">
                <div className="relative w-full h-full flex items-center justify-center ">
                    <div className="relative w-[600px] h-[600px]">
                        {/* Photo 1 - Top Right */}
                        <motion.div
                            className="absolute left-[-18%] sm:left-[20%] -translate-x-[60%] -translate-y-[30%] top-[45%] lg:left-[25%] lg:-translate-x-1/2 lg:-translate-y-1/2 w-[180px] h-[180px] lg:w-[220px] lg:h-[220px]"
                            style={{
                                x: bgPhoto1X,
                                y: bgPhoto1Y,
                                scale: bgPhoto1Scale,
                                opacity: bgPhoto1Opacity,
                            }}
                        >
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
                                <Image src="/assets/2025-09-24 05.52.06.jpg" alt="iCog workspace" fill className="object-cover" />
                            </div>
                        </motion.div>

                        {/* Photo 2 - Top Left */}
                        <motion.div
                            className="absolute top-[45%] left-[100%] sm:left-[50%] lg:left-[30%] xl:left-[20%] -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] lg:w-[210px] lg:h-[210px]"
                            style={{
                                x: bgPhoto2X,
                                y: bgPhoto2Y,
                                scale: bgPhoto2Scale,
                                opacity: bgPhoto2Opacity,
                            }}
                        >
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
                                <Image src="/assets/2025-09-24 05.52.16.jpg" alt="iCog collaboration" fill className="object-cover" />
                            </div>
                        </motion.div>

                        {/* Photo 3 - Bottom Right */}
                        <motion.div
                            className="absolute top-[63%]  md:top-[70%] xl:top-1/2 left-[-18%] sm:left-[35%] md:left-[40%] lg:left-[60%] xl:left-[80%] -translate-x-1/2 -translate-y-1/2 w-[130px]  h-[160px] md:w-[190px] md:h-[190px] lg:w-[220px] lg:h-[220px]"
                            style={{
                                x: bgPhoto3X,
                                y: bgPhoto3Y,
                                scale: bgPhoto3Scale,
                                opacity: bgPhoto3Opacity,
                            }}
                        >
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
                                <Image src="/assets/2025-09-24 05.51.31.jpg" alt="iCog team meeting" fill className="object-cover" />
                            </div>
                        </motion.div>

                        {/* Photo 4 - Bottom Left */}
                        <motion.div
                            className="absolute top-[70%] left-[120%] sm:left-[95%]  lg:left-[75%] -translate-x-1/2 -translate-y-1/2  w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px]"
                            style={{
                                x: bgPhoto4X,
                                y: bgPhoto4Y,
                                scale: bgPhoto4Scale,
                                opacity: bgPhoto4Opacity,
                            }}
                        >
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src="/assets/photo_2025-07-09_14-05-17.jpg"
                                    alt="iCog innovation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Photo 5 - Top Middle Right */}
                        <motion.div
                            className="absolute top-[45%] left-[-10%]  sm:left-[40%]  -translate-x-[70%] -translate-y-[40%] md:top-[55%] lg:left-[65%] xl:left-[70%] md:-translate-x-1/2 md:-translate-y-1/2 w-[190px] h-[190px] md:w-[230px] md:h-[230px] lg:w-[280px] lg:h-[280px]"
                            style={{
                                x: bgPhoto5X,
                                y: bgPhoto5Y,
                                scale: bgPhoto5Scale,
                                opacity: bgPhoto5Opacity,
                            }}
                        >
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
                                <Image src="/assets/2025-09-24 05.51.37.jpg" alt="iCog development" fill className="object-cover" />
                            </div>
                        </motion.div>

                        {/* Photo 6 - Top Middle Left */}
                        {/* <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]"
                            style={{
                                x: bgPhoto6X,
                                y: bgPhoto6Y,
                                scale: bgPhoto6Scale,
                                opacity: bgPhoto6Opacity,
                            }}
                        >
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src="/assets/2025-09-24 05.50.42.jpg"
                                    alt="iCog team"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div> */}

                        {/* Photo 7 - Bottom Middle Right */}
                        <motion.div
                            className="absolute top-[50%] left-[-10%] sm:left-[30%] lg:left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
                            style={{
                                x: bgPhoto7X,
                                y: bgPhoto7Y,
                                scale: bgPhoto7Scale,
                                opacity: bgPhoto7Opacity,
                            }}
                        >
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
                                <Image src="/assets/photo_2025-06-26_15-26-03.jpg" alt="iCog workspace" fill className="object-cover" />
                            </div>
                        </motion.div>

                        {/* Photo 8 - Bottom Middle Left */}
                        <motion.div
                            className="absolute top-[60%] lg:top-1/2 left-[110%] sm:left-[60%]  md:left-[55%] lg:left-[35%] xl:left-[25%] -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
                            style={{
                                x: bgPhoto8X,
                                y: bgPhoto8Y,
                                scale: bgPhoto8Scale,
                                opacity: bgPhoto8Opacity,
                            }}
                        >
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
                                <Image src="/assets/2025-09-24 05.52.11.jpg" alt="iCog collaboration" fill className="object-cover" />
                            </div>
                        </motion.div>

                        {/* Main Photo - starts as center, then moves to top-left position with same size as others */}
                        {/* Main Photo - stays centered until transition */}
                        <motion.div
                            className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                x: centerX,
                                y: centerY,
                                scale: centerScale,
                                opacity: centerOpacity,
                                width: centerSize,
                                height: centerSize,
                            }}
                        >
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
                                <Image src="/assets/2025-09-24 05.50.42.jpg" alt="iCog team" fill className="object-cover" priority />
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Content - appears only after all images are in final positions */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                        style={{
                            opacity: textOpacity,
                            scale: textScale,
                        }}
                    >
                        <div className="text-center max-w-[450px] mx-auto px-8">
                            <h2 className="text-2xl md:text-5xl font-bold text-foreground mb-6 text-balance">Where we begun</h2>
                            <p className="text-[16px] text-muted-foreground leading-relaxed text-pretty">
                                iCog began in 2016 as a project under iCog Labs with a simple idea to make technology a force for good,
                                accessible to all. It has since grown into a company focused on training, product development, and
                                consultancy.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ✅ Unique Mobile Layout (asymmetric & modern storytelling look) */}
            <div className="flex sm:hidden flex-col items-center justify-center text-center px-4 py-20 space-y-8">

                {/* 🔹 Top feature images */}
                <div className="grid grid-cols-2 gap-3 w-full max-w-[420px]">
                    <div className="relative col-span-1 aspect-square rounded-3xl overflow-hidden shadow-lg hover:scale-[1.05] transition-transform duration-300">
                        <Image src="/assets/2025-09-24 05.50.42.jpg" alt="iCog moment 1" fill className="object-cover" />
                    </div>
                    <div className="relative col-span-1 aspect-[4/5] rounded-3xl overflow-hidden shadow-lg hover:scale-[1.05] transition-transform duration-300">
                        <Image src="/assets/2025-09-24 05.52.06.jpg" alt="iCog moment 2" fill className="object-cover" />
                    </div>
                </div>

                {/* 🔸 Text Centered */}
                <div className="max-w-[360px] text-center px-2 mt-4">
                    <h2 className="text-3xl font-bold text-foreground mb-3 tracking-tight">
                        Where we begun
                    </h2>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                        iCog began in 2016 as a project under iCog Labs with a simple idea —
                        to make technology a force for good, accessible to all. What started
                        as an experiment has grown into a movement of creativity, learning, and innovation.
                    </p>
                </div>

                {/* 🔹 Middle mosaic (4 smaller images) */}
                <div className="grid grid-cols-2 gap-3 w-full max-w-[420px]">
                    {[
                        "/assets/2025-09-24 05.52.11.jpg",
                        "/assets/2025-09-24 05.52.16.jpg",
                        "/assets/2025-09-24 05.51.31.jpg",
                        "/assets/photo_2025-07-09_14-05-17.jpg",
                    ].map((src, index) => (
                        <div
                            key={index}
                            className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md hover:scale-[1.04] transition-transform duration-300"
                        >
                            <Image src={src} alt={`iCog gallery ${index + 1}`} fill className="object-cover" />
                        </div>
                    ))}
                </div>

                {/* 🔹 Bottom wide visuals */}
                <div className="space-y-3 w-full max-w-[420px]">
                    <div className="relative w-full aspect-[5/3] rounded-3xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300">
                        <Image src="/assets/2025-09-24 05.51.37.jpg" alt="iCog moment 3" fill className="object-cover" />
                    </div>
                    <div className="relative w-full aspect-[5/3] rounded-3xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300">
                        <Image src="/assets/photo_2025-06-26_15-26-03.jpg" alt="iCog moment 4" fill className="object-cover" />
                    </div>
                </div>

            </div>




        </div>
    )
}
