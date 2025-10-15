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
                logoAlt="Training"
                title="Training"
                description="We believe in the power of education and are committed to its continuous improvement. Our training programs are efficient, data-driven, and designed for measurable impact. We work to break down barriers, ensuring access to digital skills for individuals from all backgrounds"
                image="/assets/photo_2025-06-26_11-38-28.jpg"
                imageAlt="Training"
            />

            <SolutionSection
                index={1}
                logoAlt="Product"
                title="Product"
                description="We are deeply committed to driving innovation through a strong focus on product development. Our dedicated team is actively engaged in research, design, and development to create diverse solutions to local problems. These span multiple areas and are aimed at addressing various challenges and opportunities in the market."
                image="/assets/photo_2025-06-26_11-38-33.jpg"
                imageAlt="Product"
            />

            <SolutionSection
                index={2}
                title="Consultancy"
                description="We solve challenges through technology across sectors, combining fresh perspectives, local insight, and emerging tech. Our team is equipped to deliver impactful, innovative solutions. "
                image="/assets/photo_2025-06-26_11-38-36.jpg"
                imageAlt="Consultancy"
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

function SolutionSection({ index, title, description, image, imageAlt }: SolutionSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    // Track scroll of current and next section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end start"],
    });

    // This transform controls scale & motion
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50]);

    // The grayscale logic — only turns B&W when next section is covering
    const grayscale = useTransform(scrollYProgress, [0, 1, 1], ["grayscale(0%)", "grayscale(100%)", "grayscale(100%)"]);

    const isOdd = index % 2 !== 0;

    return (
        <motion.div
            ref={sectionRef}
            style={{ scale, opacity, y }}
            className="sticky top-5 z-10 bg-white flex items-center justify-center mb-20"
        >
            <div
                className={`flex flex-col shadow-lg ${isOdd ? "md:flex-row-reverse" : "md:flex-row"
                    } items-center justify-between h-[700px] md:h-[500px] w-full px-10`}
            >
                <div className="md:w-[600px] text-left py-6 md:p-[50px]">
                    <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-black mb-6"
                    >
                        {title}
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-black leading-relaxed text-base md:text-lg"
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        // initial={{ opacity: 0, y: 30 }}
                        // whileInView={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8"
                    >
                        <button className="inline-flex items-center px-5 py-2 rounded-[0px_8px_0px_8px] bg-black text-white hover:bg-gray-800 transition-all">
                            Read more <span className="text-sm">↗</span>
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    style={{ filter: grayscale }}
                    className="relative w-full md:w-[400px] bg-gradient-to-tr from-[#0A213C] to-[#6D3431] rounded-xl overflow-hidden h-[300px] md:h-[400px] mb-6 md:mb-0 "
                >
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={imageAlt}
                        fill
                        className="rounded-xl object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </motion.div>
            </div>
        </motion.div>
    );
}

