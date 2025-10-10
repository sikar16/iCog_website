"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function BuildingBlock() {
    return (
        <div className='bg-black text-white px-4 md:px-20 py-16'>
            <motion.div initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }} className='text-center text-3xl md:text-4xl font-bold mb-12'>
                Building Block
            </motion.div>

            <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-10 h-[590px]'>
                <div className='md:w-[500px] text-center md:text-left'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='inline-block mb-8'
                    >
                        <Image
                            src="/assets/solveit-logo12.png"
                            alt='iCog Logo'
                            height={172}
                            width={148}
                            className='rounded-xl shadow-lg'
                        />
                    </motion.div>

                    <p className='text-gray-300 leading-relaxed text-base md:text-lg'>
                        A national innovation competition empowering youth (18–28) to turn local challenges into tech-based solutions, supporting grassroots innovation and early-stage startups across 15 Ethiopian cities.

                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-[450px] md:w-[480px] bg-gradient-to-tr from-[#0A213C] to-[#6D3431] rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]"
                >
                    <Image
                        src="/digitruck.png"
                        alt="Digital Truck"
                        height={172}
                        width={148}
                        className="rounded-xl object-contain w-full h-full mx-auto"
                    />

                    {/* Semi-transparent overlay for gradient effect */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </motion.div>
            </div>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-10 h-[590px]'>
                <div className='md:w-[500px] text-center md:text-left'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='inline-block mb-8'
                    >
                        <Image
                            src="/logodg2-cropped.webp"
                            alt='iCog Logo'
                            height={172}
                            width={148}
                            className='rounded-xl shadow-lg'
                        />
                    </motion.div>

                    <p className='text-gray-300 leading-relaxed text-base md:text-lg'>
                        An online platform that kickstarts K–12 students’ coding journeys with culturally engaging content—focused on the African diaspora while creating job opportunities for youth in Africa.

                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-[450px] md:w-[480px] bg-gradient-to-tr from-[#0A213C] to-[#6D3431] rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]"
                >
                    <Image
                        src="/digitruck.png"
                        alt="Digital Truck"
                        height={524}
                        width={480}
                        className="rounded-xl object-contain w-full h-full mx-auto"
                    />

                    {/* Semi-transparent overlay for gradient effect */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </motion.div>
            </div>

            <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-10 h-[590px]'>
                <div className='md:w-[500px] text-center md:text-left'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='inline-block mb-8'
                    >
                        <h3 className="text-4xl md:text-5xl font-bold">
                            Summer Camp
                        </h3>

                    </motion.div>

                    <p className='text-gray-300 leading-relaxed text-base md:text-lg'>
                        An engaging summer program that introduces students to coding and digital skills through hands-on learning and creative activities like pottery, chess, drone training, and college prep. The camp encourages exploration, critical thinking, and fun in a supportive environment.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-[450px] md:w-[480px] bg-gradient-to-tr from-[#0A213C] to-[#6D3431] rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]"
                >
                    <Image
                        src="/digitruck.png"
                        alt="Digital Truck"
                        height={524}
                        width={480}
                        className="rounded-xl object-contain w-full h-full mx-auto"
                    />

                    {/* Semi-transparent overlay for gradient effect */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </motion.div>
            </div>
        </div>
    )
}
