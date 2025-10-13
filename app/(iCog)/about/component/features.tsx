"use client"
import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Features() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={containerRef} className="bg-white">
            <SolutionSection
                index={0}
                logoAlt="Big Truck Ethiopia Logo"
                title="Big Truck Ethiopia"
                description="iCog began in 2016 as a project under iCog Labs with a simple idea to make technology a force for good, accessible to all. It has since grown into a company focused on training, product development, and consultancy."
                image="/logodg2-cropped.webp"
                imageAlt="Digital Truck"
            />

            <SolutionSection
                index={1}
                logoAlt="Leyu Logo"
                title="Leyu"
                description="An open-source platform crowdsourcing language data for Ethiopian languages to improve AI and NLP tools. Leyu builds ethical, community-driven datasets in low-resource languages in Ethiopia."
                image="/logodg2-cropped.webp"
                imageAlt="Leyu Platform"
            />

            <SolutionSection
                index={2}
                title="Training Solution"
                description="Training Solution is a training facilitation platform that helps organizations design, manage, and measure training more efficiently. From structuring content to coordinating sessions and tracking outcomes, TFP streamlines the entire training process in one integrated tool."
                image="/logodg2-cropped.webp"
                imageAlt="Training Solution"
            />
        </div>
    )
}

interface SolutionSectionProps {
    index: number
    logo?: string
    logoAlt?: string
    title?: string
    description: string
    image: string
    imageAlt: string
}

function SolutionSection({ index, logo, logoAlt, title, description, image, imageAlt }: SolutionSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 0], [0.8, 1, 1, 1.95])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50])
    const grayscale = useTransform(
        scrollYProgress,
        index === 0
            ? [0, 0]
            : [0, 0.5, 0.7, 0.9, 1],
        index === 0
            ? ["grayscale(0%)", "grayscale(0%)"]
            : [
                "grayscale(0%)",
                "grayscale(0%)",
                "grayscale(100%)",
                "grayscale(0%)",
                "grayscale(0%)"
            ]
    )

    const isOdd = index % 2 !== 0

    return (
        <motion.div
            ref={sectionRef}
            style={{ scale, opacity, y }}
            className="sticky top-10 px-4 md:px-20 bg-white pb-5 flex items-center"
        >
            <div className={`flex flex-col rounded-4xl shadow-xl ${isOdd ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between h-[500px] w-full`}>
                <div className="md:w-[600px] text-center md:text-left p-[77px]">
                    {title && !logo && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-black">{title}</h3>
                        </motion.div>
                    )}

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-black leading-relaxed text-base md:text-lg"
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-8"
                    >
                        <button className="inline-flex items-center px-5 py-2 rounded-[0px_8px_0px_8px] bg-black text-white hover:bg-gray-800 transition-all">
                            Read more <span className="text-sm">↗</span>
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ filter: grayscale }}
                    viewport={{ once: true }}
                    className="relative w-full md:w-[480px] bg-gradient-to-tr from-[#0A213C] to-[#6D3431] rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]"
                >
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="rounded-xl object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </motion.div>
            </div>
        </motion.div>
    )
}