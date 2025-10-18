"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export default function Features() {
    const containerRef = useRef<HTMLDivElement>(null)

    const sections = [
        {
            title: "Training",
            description:
                "We believe in the power of education and are committed to its continuous improvement. Our training programs are efficient, data-driven, and designed for measurable impact. We work to break down barriers, ensuring access to digital skills for individuals from all backgrounds.",
            image: "/assets/photo_2025-06-26_11-38-28.jpg",
            imageAlt: "Training",
        },
        {
            title: "Product",
            description:
                "We are deeply committed to driving innovation through a strong focus on product development. Our dedicated team is actively engaged in research, design, and development to create diverse solutions to local problems. These span multiple areas and are aimed at addressing various challenges and opportunities in the market.",
            image: "/assets/photo_2025-06-26_11-38-33.jpg",
            imageAlt: "Product",
        },
        {
            title: "Consultancy",
            description:
                "We solve challenges through technology across sectors, combining fresh perspectives, local insight, and emerging tech. Our team is equipped to deliver impactful, innovative solutions.",
            image: "/assets/photo_2025-06-26_11-38-36.jpg",
            imageAlt: "Consultancy",
        },
    ]

    return (
        <div ref={containerRef} className="bg-white relative">
            {sections.map((s, i) => (
                <SolutionSection
                    key={i}
                    index={i}
                    total={sections.length}
                    title={s.title}
                    description={s.description}
                    image={s.image}
                    imageAlt={s.imageAlt}
                />
            ))}
        </div>
    )
}

interface SolutionSectionProps {
    index: number
    total: number
    title: string
    description: string
    image: string
    imageAlt: string
}

function SolutionSection({ index, total, title, description, image, imageAlt }: SolutionSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    // Smooth spring physics
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // Fixed z-index based on index (higher index = higher z-index)
    const zIndex = 10 + index

    // Grayscale logic - card becomes color when it's the most visible one
    const grayscale = useTransform(smoothProgress, (progress) => {
        // Wider range for smooth B&W in both scroll directions
        const centerStart = 0.4
        const centerEnd = 0.6
        if (progress >= centerStart && progress <= centerEnd) return "grayscale(0%)"
        return "grayscale(100%)"
    })


    // Scale effect
    const scale = useTransform(smoothProgress, [0.9, 1, 0.9], [0.9, 1, 0.9])

    // Vertical movement
    const y = useTransform(smoothProgress, [0, 0.5, 1], [30, 0, 50])

    // Opacity
    const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    const isOdd = index % 2 !== 0

    return (
        <motion.div
            ref={sectionRef}
            style={{
                opacity,
                zIndex // Fixed z-index based on position in array
            }}
            className="sticky top-0 flex items-center justify-center min-h-[60vh] "
        >
            <motion.div
                style={{
                    scale,
                    filter: grayscale,
                    y,
                }}
                className={`flex flex-col gap-11 ${isOdd ? "md:flex-row-reverse" : "md:flex-row"} 
                items-center justify-between w-[100%] max-w-6xl p-10 bg-white rounded-3xl shadow-sm relative overflow-hidden border border-gray-100`}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-transparent pointer-events-none" />

                {/* Text Section */}
                <div className="flex-1 text-left space-y-6 relative z-10">
                    <motion.h3
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[38px] font-bold text-gray-900"
                    >
                        {title}
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-700 text-[18px] leading-relaxed"
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <button className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-[0px_8px_0px_8px] hover:bg-gray-800 transition-all">
                            Read more <span className="ml-2 text-sm">↗</span>
                        </button>
                    </motion.div>
                </div>

                {/* Image Section */}
                {/* <motion.div
                    className="relative flex-1 w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden "
                >
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="object-cover rounded-2xl"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                </motion.div> */}

                {/* Image Section */}
                <motion.div
                    className="relative block md:flex-1  w-full rounded-2xl overflow-hidden mb-6 sm:mb-0
               h-[250px] sm:h-[350px] md:h-[450px] flex-shrink-0"
                >
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="object-cover rounded-2xl"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                </motion.div>


            </motion.div>
        </motion.div>
    )
}