"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Solutions() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={containerRef} className="bg-black text-white">
            <p className="text-center text-2xl sm:text-3xl md:text-4xl font-bold pt-12 sm:pt-16 pb-6 sm:pb-8">
                Our solutions
            </p>

            <SolutionSection
                index={0}
                logo="/assets/Impact Page/logodg2-cropped.webp"
                logoAlt="Big Truck Ethiopia Logo"
                title="DigiTruck Ethiopia"
                description=" A mobile tech classroom housed in a 40ft container, DigiTruck brings hands-on STEAM education to underserved areas 
                across Ethiopia using laptops, robotics, and microcontrollers to spark interest in coding and innovation."
                image="/assets/01e735ca96095772ae560ee58de1de11321a4b89-removebg-preview.png"
                imageAlt="Digital Truck"
            />

            <SolutionSection
                index={1}
                logo="/assets/Impact Page/leyu 1.png"
                logoAlt="Leyu Logo"
                title="Leyu"
                description="An open-source platform crowdsourcing language data for Ethiopian
                 languages to improve AI and NLP tools. Leyu builds ethical, community-driven datasets 
                 in low-resource languages in Ethiopia."
                image="/assets/e9c9501edc30d1632a67c66a55f2b8f2dfc2eccb.png"
                imageAlt="Leyu Platform"
            />

            <SolutionSection
                index={2}
                title="TFP"
                description="It is a training facilitation platform that helps organizations design, manage, and measure training more efficiently. 
                From structuring content to coordinating sessions and tracking outcomes, 
                TFP streamlines the entire training process in one integrated tool"
                image="/assets/01e735ca96095772ae560ee58de1de11321a4b89-removebg-preview.png"
                imageAlt="Training Solution"
            />

            <SolutionSection
                index={3}
                title="Digital literacy"
                description="An initiative to equip youth in TVET institutions and beyond with essential digital skills that boost employability,
                 unlock entrepreneurial potential, and close the digital divide."
                image="/assets/Impact Page/unnamed (5).png"
                imageAlt="Digital Literacy"
            />

            <SolutionSection
                index={4}
                title="for (her)"
                description="A social impact initiative designed to help public high school girls build confidence and tech skills through hands-on coding and digital literacy training. Aims to create long-term opportunities for girls in Ethiopia to explore and thrive in the world of technology."
                image="/assets/Impact Page/IMG_9226.JPG"
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
            className="sticky top-0 px-4 sm:px-8 md:px-20 py-10 sm:py-16 bg-black"
        >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-10 min-h-[500px] sm:min-h-[550px] md:min-h-[590px]">

                {/* LEFT — TEXT */}
                <div className="w-full md:w-[480px] text-center md:text-left">
                    {/* Logo or Title */}
                    {logo ? (
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="inline-block mb-6 sm:mb-8"
                        >
                            <Image
                                src={logo}
                                alt={logoAlt || "Logo"}
                                height={120}
                                width={220}
                                className="rounded-xl shadow-lg mx-auto md:mx-0"
                            />
                        </motion.div>
                    ) : (
                        <motion.h3
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8"
                        >
                            {title}
                        </motion.h3>
                    )}

                    {/* Mobile Image */}


                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg mb-24"
                    >
                        {description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative w-full md:hidden my-6  sm:mb-8  h-[400px]  rounded-xl overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            className="object-cover rounded-xl"
                        />
                    </motion.div>
                </div>

                {/* RIGHT — IMAGE (desktop only) */}
                <motion.div
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="hidden md:block  relative w-full md:w-[460px] lg:w-[520px] h-[360px] md:h-[420px] lg:h-[500px] bg-gradient-to-tr from-[#0A213C] to-[#6D3431] rounded-xl overflow-hidden shadow-lg"
                >
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="object-fill w-full h-full rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </motion.div>
            </div>
        </motion.div>
    )
}
