"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'

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
                Building Block
            </motion.div>

            {/* Section 1 */}
            <Section
                image="/digitruck.png"
                logo="/assets/solveit-logo12.png"
                title=""
                description="A national innovation competition empowering youth (18–28) to turn local challenges into tech-based solutions, supporting grassroots innovation and early-stage startups across 15 Ethiopian cities."
            />

            {/* Section 2 */}
            <Section
                image="/assets/unnamed.jpg"
                logo="/logodg2-cropped.webp"
                title=""
                description="An online platform that kickstarts K–12 students’ coding journeys with culturally engaging content—focused on the African diaspora while creating job opportunities for youth in Africa."
            />

            {/* Section 3 */}
            <Section
                image="/digitruck.png"
                logo=""
                title="Summer Camp"
                description="An engaging summer program that introduces students to coding and digital skills through hands-on learning and creative activities like pottery, chess, drone training, and college prep. The camp encourages exploration, critical thinking, and fun in a supportive environment."
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

    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 h-auto md:h-[500px]'>

            <div className='md:w-[500px] w-full text-center md:text-left'>
                {logo && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className='inline-block mb-6 sm:mb-8'
                    >
                        <Image
                            src={logo}
                            alt='Logo'
                            height={140}
                            width={140}
                            className='rounded-xl shadow-lg mx-auto md:mx-0'
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
                    className='relative w-full md:hidden my-6 sm:mb-8 h-[220px] sm:h-[280px] rounded-xl overflow-hidden'
                >
                    <Image
                        src={image}
                        alt={title || 'Image'}
                        fill
                        className='object-cover w-full h-full rounded-xl'
                    />
                </motion.div>
            </div>

            {/* Right: Image (desktop) */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className='hidden md:block relative w-full md:w-[480px] lg:w-[520px] h-[320px] sm:h-[380px] md:h-[420px] bg-gradient-to-tr from-[#0A213C] to-[#6D3431] rounded-xl overflow-hidden shadow-lg'
            >
                <Image
                    src={image}
                    alt={title || 'Image'}
                    fill
                    className='object-fill w-full h-full rounded-xl'
                />
                <div className='absolute inset-0 bg-black/10'></div>
            </motion.div>
        </div>
    )
}
