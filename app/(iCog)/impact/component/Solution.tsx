"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Solutions() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={containerRef} className="bg-black text-white">
            <p className="text-center text-3xl md:text-4xl font-bold pt-16 pb-8">Our Solution</p>

            <SolutionSection
                index={0}
                logo="/logodg2-cropped.webp"
                logoAlt="Big Truck Ethiopia Logo"
                title="Big Truck Ethiopia"
                description="iCog began in 2016 as a project under iCog Labs with a simple idea to make technology a force for good, accessible to all. It has since grown into a company focused on training, product development, and consultancy."
                image="/logodg2-cropped.webp"
                imageAlt="Digital Truck"
            />

            <SolutionSection
                index={1}
                logo="/2025-10-10 10.32.39.jpg"
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

            <SolutionSection
                index={3}
                title="Digital literacy"
                description="An initiative to equip youth in TVET institutions and beyond with essential digital skills that boost employability, unlock entrepreneurial potential, and close the digital divide."
                image="/logodg2-cropped.webp"
                imageAlt="Digital Literacy"
            />

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

function SolutionSection({ logo, logoAlt, title, description, image, imageAlt }: SolutionSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 0.95])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50])

    return (
        <motion.div
            ref={sectionRef}
            style={{ scale, opacity, y }}
            className="sticky top-0 px-4 md:px-20 py-16 bg-black"
        >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 min-h-[590px]">

                {/* LEFT SIDE — TEXT */}
                <div className="md:w-[500px] text-center md:text-left">

                    {/* 1️⃣ Title or Logo first */}
                    {logo ? (
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="inline-block mb-8"
                        >
                            <Image
                                src={logo}
                                alt={logoAlt || "Logo"}
                                height={170}
                                width={260}
                                className="rounded-xl shadow-lg"
                            />
                        </motion.div>
                    ) : (
                        <motion.h3
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-8"
                        >
                            {title}
                        </motion.h3>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative w-full md:hidden mb-8 h-[300px] rounded-xl overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            className="object-cover rounded-xl"
                        />
                    </motion.div>



                    {/* 3️⃣ Description slides up last */}
                    <motion.p
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-gray-300 leading-relaxed text-base md:text-lg"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* RIGHT SIDE — IMAGE (desktop) */}
                <motion.div
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="hidden md:block relative w-full md:w-[480px] bg-gradient-to-tr from-[#0A213C] to-[#6D3431] rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]"
                >
                    <Image src={image} alt={imageAlt} fill className="object-cover rounded-xl" />
                    <div className="absolute inset-0 bg-black/10"></div>
                </motion.div>
            </div>
        </motion.div>
    )
}
