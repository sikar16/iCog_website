"use client"
import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Solutions() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={containerRef} className="bg-black text-white">
            <p className="text-center text-3xl md:text-4xl font-bold pt-16 pb-8">Our Solution</p>

            {/* Solution 1: Big Truck Ethiopia */}
            <SolutionSection
                index={0}
                logo="/logodg2-cropped.webp"
                logoAlt="Big Truck Ethiopia Logo"
                title="Big Truck Ethiopia"
                description="iCog began in 2016 as a project under iCog Labs with a simple idea to make technology a force for good, accessible to all. It has since grown into a company focused on training, product development, and consultancy."
                image="/logodg2-cropped.webp"
                imageAlt="Digital Truck"
            />

            {/* Solution 2: Leyu */}
            <SolutionSection
                index={1}
                logo="/2025-10-10 10.32.39.jpg"
                logoAlt="Leyu Logo"
                title="Leyu"
                description="An open-source platform crowdsourcing language data for Ethiopian languages to improve AI and NLP tools. Leyu builds ethical, community-driven datasets in low-resource languages in Ethiopia."
                image="/logodg2-cropped.webp"
                imageAlt="Leyu Platform"
            />

            {/* Solution 3: Training Solution */}
            <SolutionSection
                index={2}
                title="Training Solution"
                description="Training Solution is a training facilitation platform that helps organizations design, manage, and measure training more efficiently. From structuring content to coordinating sessions and tracking outcomes, TFP streamlines the entire training process in one integrated tool."
                image="/logodg2-cropped.webp"
                imageAlt="Training Solution"
            />

            {/* Solution 4: Digital Literacy */}
            <SolutionSection
                index={3}
                title="Digital literacy"
                description="An initiative to equip youth in TVET institutions and beyond with essential digital skills that boost employability, unlock entrepreneurial potential, and close the digital divide."
                image="/logodg2-cropped.webp"
                imageAlt="Digital Literacy"
            />

            {/* Solution 5: For Her */}
            <SolutionSection
                index={4}
                title="For Her"
                description="A social impact initiative designed to help public high school girls build confidence and tech skills through hands-on coding and digital literacy training. Aims to create long-term opportunities for girls in Ethiopia to explore and thrive in the world of technology."
                image="/logodg2-cropped.webp"
                imageAlt="For Her Initiative"
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

    // Scale and opacity for the covering effect
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50])

    return (
        <motion.div ref={sectionRef} style={{ scale, opacity, y }} className="sticky top-0 px-4 md:px-20 py-16 bg-black">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 min-h-[590px]">
                <div className="md:w-[500px] text-center md:text-left">
                    {logo && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="inline-block mb-8"
                        >
                            <Image
                                src={logo || "/placeholder.svg"}
                                alt={logoAlt || "Logo"}
                                height={170}
                                width={260}
                                className="rounded-xl shadow-lg"
                            />
                        </motion.div>
                    )}

                    {title && !logo && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold">{title}</h3>
                        </motion.div>
                    )}

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-300 leading-relaxed text-base md:text-lg"
                    >
                        {description}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative w-full md:w-[480px] bg-gradient-to-tr from-[#0A213C] to-[#6D3431] rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]"
                >
                    <Image src={image} alt={imageAlt} fill className="rounded-xl object-cover" />

                    <div className="absolute inset-0 bg-black/10"></div>
                </motion.div>
            </div>
        </motion.div>
    )
}
