"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Features() {
    const containerRef = useRef<HTMLDivElement>(null);

    const sections = [
        {
            title: "Training",
            description:
                "We believe in the power of education and are committed to its continuous improvement. Our training programs are efficient, data-driven, and designed for measurable impact. We work to break down barriers, ensuring access to digital skills for individuals from all backgrounds.",
            image: "/assets/About Page/photo_2025-06-26_11-38-28.jpg",
            imageAlt: "Training",
        },
        {
            title: "Product",
            description:
                "We are deeply committed to driving innovation through a strong focus on product development. Our dedicated team is actively engaged in research, design, and development to create diverse solutions to local problems. These span multiple areas and are aimed at addressing various challenges and opportunities in the market.",
            image: "/assets/About Page/photo_2025-06-26_11-38-33.jpg",
            imageAlt: "Product",
        },
        {
            title: "Consultancy",
            description:
                "We thrive on solving challenges through technology across multiple sectors. With its blend of youthfulness, fresh perspectives, and deep understanding of the local context, our team is uniquely positioned to provide innovative solutions. We offer a tech-forward approach with a blend of emerging technologies and possess the expertise to guide and work with companies looking to implement impactful projects, across multiple sectors, that effectively leverage emerging technologies. Here are some companies we have worked with.",
            image: "/assets/About Page/photo_2025-06-26_11-38-36.jpg",
            imageAlt: "Consultancy",
        },
    ];

    return (
        <div ref={containerRef} className="bg-white relative">
            {sections.map((s, i) => (
                <SolutionSection
                    key={i}
                    index={i}
                    title={s.title}
                    description={s.description}
                    image={s.image}
                    imageAlt={s.imageAlt}
                />
            ))}
        </div>
    );
}

interface SolutionSectionProps {
    index: number;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
}

function SolutionSection({
    index,
    title,
    description,
    image,
    imageAlt,
}: SolutionSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const grayscale = useTransform(smoothProgress, (progress) => {
        const centerStart = 0.1;
        const centerEnd = 0.6;
        if (progress >= centerStart && progress <= centerEnd) return "grayscale(0%)";
        return "grayscale(100%)";
    });

    const scale = useTransform(smoothProgress, [0.9, 1, 0.9], [0.9, 1, 0.9]);
    const y = useTransform(smoothProgress, [0, 0.5, 1], [30, 0, 50]);
    const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const isOdd = index % 2 !== 0;

    // Videos commented out - no longer used
    // const videos = [
    //     "/assets/About Page/training.mp4",
    //     "/assets/About Page/product.mp4",
    //     "/assets/About Page/consultancy.mp4",
    // ];
    // const video = videos[index];

    return (
        <motion.div
            ref={sectionRef}
            id={title.toLowerCase()}
            style={{ opacity, filter: grayscale }}
            className="sticky top-0 flex items-center justify-center min-h-[60vh]"
        >
            <motion.div
                style={{ 
                    scale, 
                    y, 
                    backgroundColor: '#FBFBFB', 
                    boxShadow: '4px 4px 32px 0px rgba(0, 0, 0, 0.05)' 
                }}
                className={`flex flex-col gap-11 ${isOdd ? "md:flex-row-reverse" : "md:flex-row"
                    } items-center justify-between w-full max-w-7xl p-10 
        rounded-3xl relative overflow-hidden border border-gray-100`}
            >

                {/* TEXT SECTION */}
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

                {/* IMAGE SECTION */}
                <motion.div
                    className="relative block md:flex-1 w-full rounded-2xl overflow-hidden mb-6 sm:mb-0 h-[250px] sm:h-[350px] md:h-[450px] flex-shrink-0 bg-gray-100"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className={`object-cover rounded-2xl transition-all duration-300 ${isHovered ? '' : 'grayscale'}`}
                        priority={index === 0}
                    />
                    {/* Video hover functionality commented out */}
                    {/* {isHovered ? (
                        <video
                            src={video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="object-cover w-full h-full rounded-2xl"
                        />
                    ) : (
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            className="object-cover rounded-2xl transition-all duration-300"
                            priority={index === 0}
                        />
                    )} */}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
