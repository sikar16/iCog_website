"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { StaticImageData } from "next/image";

interface TimelineEvent {
    year: number;
    title: string;
    description: string;
    image?: string | StaticImageData;
}

interface TimelineProps {
    events: TimelineEvent[];
    className?: string;
}

const Timeline = ({ events, className }: TimelineProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const activeEvent = events[activeIndex];

    const handleYearClick = (index: number) => {
        setPrevIndex(activeIndex);
        setActiveIndex(index);
    };

    const getAnimationDirection = () => {
        return activeIndex > prevIndex ? "fromBottom" : "fromTop";
    };

    return (
        <div className={cn("w-full", className)}>
            <div className="relative w-full overflow-hidden rounded-[0px_40px_0px_40px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
                <div className="h-[640px] relative">
                    <div className="absolute inset-0">
                        {activeEvent.image && (
                            <Image
                                src={activeEvent.image}
                                alt={activeEvent.title}
                                fill
                                className="object-cover opacity-25"
                                priority
                            />
                        )}
                    </div>
                </div>
                <div className="absolute inset-0 z-10 px-8 py-12 md:px-16 md:py-20 text-white">
                    <div className="relative flex items-center justify-between mb-8 w-full">
                        <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-full -translate-y-1/2" />

                        {events.map((event, index) => {
                            const active = index === activeIndex;
                            return (
                                <button
                                    key={event.year}
                                    onClick={() => handleYearClick(index)}
                                    className="relative flex flex-col items-center z-10 group w-full"
                                >
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={cn(
                                                "w-4 h-4 rounded-full border-[3px] transition-all duration-300",
                                                active
                                                    ? "bg-white border-white shadow-[0_0_15px_rgba(255,255,255,0.9)] scale-125"
                                                    : "bg-gray-500/60 border-gray-400 group-hover:bg-gray-300 group-hover:scale-110"
                                            )}
                                        />
                                        {active && (
                                            <motion.div
                                                layoutId="activeLine"
                                                className="w-[3px] h-10 bg-gradient-to-b from-white via-gray-300 to-transparent mt-2 rounded-full"
                                                transition={{ duration: 0.5 }}
                                            />
                                        )}
                                    </div>

                                    <span
                                        className={cn(
                                            "mt-4 text-sm md:text-base transition-colors duration-300",
                                            active
                                                ? "text-white font-semibold text-4xl"
                                                : "text-gray-300 group-hover:text-white"
                                        )}
                                    >
                                        {event.year}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="max-w-3xl mx-auto text-left mt-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeEvent.title}
                                initial={{
                                    opacity: 0,
                                    y: getAnimationDirection() === "fromBottom" ? 40 : -40
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                exit={{
                                    opacity: 0,
                                    y: getAnimationDirection() === "fromBottom" ? -40 : 40
                                }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent drop-shadow-lg">
                                    {activeEvent.title}
                                </h3>
                                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
                                    {activeEvent.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

import vintageComputer from "@/public/assets/2025-09-24 05.50.55.jpg";
import image1 from "@/public/assets/463511bae3e22dee6d837c327538b673293853e4.jpg"
import image2 from "@/public/assets/photo_2025-06-26_15-26-03.jpg"
import image3 from "@/public/assets/463511bae3e22dee6d837c327538b673293853e4.jpg"

const timelineEvents: TimelineEvent[] = [
    {
        year: 1981,
        title: "IBM PC Revolution",
        description:
            "The launch of the IBM PC revolutionized personal computing and helped democratize access to technology and digital skills.",
        image: image1,
    },
    {
        year: 2016,
        title: "Launching iCog Anyone Can Code",
        description:
            "In 2016, iCog Anyone One Can Code was formed as a project under iCog Labs in 2016 with its first summer camp launching that summer.",
        image: image2,
    },
    {
        year: 2018,
        title: "Introducing the Solve IT",
        description:
            "2018 – Solve IT, a nationwide innovation competition, was launched to promote problem-solving, creativity, and support for Ethiopia's startup ecosystem.",
        image: image3,
    },
    {
        year: 2020,
        title: "Remote Revolution",
        description:
            "The pandemic accelerated digital transformation, redefining how people work and connect globally.",
        image: vintageComputer,
    },
];

const WhatWeDo = () => {
    return (
        <section className="min-h-screen bg-background py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="mb-8 relative w-full flex justify-center">
                        <h2 className="text-center font-bold tracking-tight text-black text-[40px] md:text-[53px] relative z-10">
                            What We Do
                        </h2>

                        <div className="absolute bottom-0 flex justify-center w-full left-[4%]">
                            <div className="h-1 bg-gray-200 w-[150px] relative overflow-hidden">
                                <div className="h-1 bg-black animate-snakeSmooth absolute left-1/2 -translate-x-1/2"></div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        @keyframes snakeSmooth {
                            0% {
                                width: 0%;
                                left: 0%;
                            }
                            50% {
                                width: 100%;
                                left: 0%;
                            }
                            100% {
                                width: 0%;
                                left: 100%;
                            }
                        }

                        .animate-snakeSmooth {
                            position: absolute;
                            height: 100%;
                            background-color: black;
                            animation: snakeSmooth 2s linear infinite;
                        }
                    `}</style>

                    <p className="text-lg md-text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We combine training, product development, and consultancy to deliver impactful tech solutions.
                        With a focus on accessibility, innovation, and local relevance, our work bridges skill gaps,
                        builds tools that matter, and supports organizations in creating meaningful change through technology.
                        .
                    </p>
                </div>

                <Timeline events={timelineEvents} />
            </div>
        </section>
    );
};

export default WhatWeDo;