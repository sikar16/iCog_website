"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function BuildingBlock() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={containerRef} className='bg-black text-white px-4 sm:px-8 md:px-20 py-12 sm:py-16'>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className='text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12'
            >
                Building blocks

                <p className='hidden lg:block lg:text-lg font-normal mt-6 w-full max-w-4xl text-center justify-center items-center mx-auto'>
                    Our current initiatives build upon a foundation of impactful past projects. These projects, while no longer active,
                    provided invaluable lessons, sparked innovation, and laid the groundwork for what we do today.
                </p>
            </motion.div>

            {/* Section 1 */}
            <Section
                image="/assets/Impact Page/about.jpg"
                logo="/assets/Impact Page/solveit-logo12.png"
                title=""
                description="A national innovation competition empowering youth (18–28) to turn local challenges into tech-based solutions,
                             supporting grassroots innovation and early-stage startups across 15 Ethiopian cities."
            />

            {/* Section 2 */}
            <Section
                image="/assets/Impact Page/unnamed.jpg"
                logo="/assets/Impact Page/Logo.png"
                title=""
                description="An online platform that kickstarts K–12 students’ coding journeys with culturally engaging content—focused on the African diaspora while creating job opportunities for youth in Africa."
            />

            {/* Section 3 */}
            <Section
                image="/assets/Impact Page/photo_2025-10-07_09-56-14.jpg"
                logo=""
                title="Summer Camp"
                description="An engaging summer program that introduces students to coding and digital skills through hands-on learning and 
                creative activities like pottery, chess, drone training, and college prep. The camp encourages exploration, critical thinking, 
                and fun in a supportive environment.
"
            />
        </div>
    )
}

interface SectionProps {
    image: string
    logo?: string
    title?: string
    description: string
}

function Section({ image, logo, title, description }: SectionProps) {
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
            className="sticky top-0 bg-black text-white min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-20 py-12"
        >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10 w-full max-w-7xl">

                <div className='w-full md:w-[500px] text-center md:text-left'>
                    {logo && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className='inline-block mb-6 sm:mb-8'
                        >
                            <img
                                src={logo}
                                alt='Logo'
                                className='h-[120px] sm:h-[150px] w-auto object-contain shadow-lg mx-auto md:mx-0'
                                style={{ borderRadius: '22px' }}
                            />
                        </motion.div>
                    )}

                    {title && !logo && (
                        <motion.h3
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8'
                        >
                            {title}
                        </motion.h3>
                    )}



                    <motion.p
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className='text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg'
                    >
                        {description}
                    </motion.p>
                    {/* Mobile image */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="w-full md:hidden my-6 sm:mb-8 flex justify-center"
                    >
                        <img
                            src={image}
                            alt={title || "Image"}
                            className="w-auto h-auto max-w-full max-h-[300px] object-contain"
                            style={{ borderRadius: '22px' }}
                        />
                    </motion.div>


                </div>

                {/* Right: Image (desktop) */}
                <motion.div
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="hidden md:flex items-center justify-center shadow-lg"
                >
                    <img
                        src={image}
                        alt={title || 'Image'}
                        className='w-[280px] h-[250px] md:w-[300px] md:h-[280px] lg:w-[380px] lg:h-[360px] object-cover'
                        style={{ borderRadius: '22px' }}
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}
