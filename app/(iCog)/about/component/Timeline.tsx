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
    const activeEvent = events[activeIndex];

    return (
        <div className={cn("w-full", className)}>
            <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                    {activeEvent.image && (
                        <Image
                            src={activeEvent.image}
                            alt={activeEvent.title}
                            fill
                            className="object-cover opacity-25 scale-105"
                        />
                    )}
                </div>

                {/* Content */}
                <div className="relative z-10 px-8 py-12 md:px-16 md:py-20 text-white">
                    {/* Timeline Bar */}
                    <div className="relative flex items-center justify-between mb-8 w-full">
                        {/* Full-width base line */}
                        <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-linear-330 from-gray-300 via-gray-400 to-gray-500 rounded-full -translate-y-1/2" />

                        {events.map((event, index) => {
                            const active = index === activeIndex;
                            return (
                                <button
                                    key={event.year}
                                    onClick={() => setActiveIndex(index)}
                                    className="relative flex flex-col items-center z-10 group w-full"
                                >
                                    {/* Dot */}
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={cn(
                                                "w-4 h-4 rounded-full border-[3px] transition-all duration-300",
                                                active
                                                    ? "bg-white border-white shadow-[0_0_15px_rgba(255,255,255,0.9)] scale-125"
                                                    : "bg-gray-500/60 border-gray-400 group-hover:bg-gray-300 group-hover:scale-110"
                                            )}
                                        />

                                        {/* Vertical Active Line */}
                                        {active && (
                                            <motion.div
                                                layoutId="activeLine"
                                                className="w-[3px] h-16 bg-gradient-to-b from-white via-gray-300 to-transparent mt-2 rounded-full"
                                                transition={{ duration: 0.5 }}
                                            />
                                        )}
                                    </div>

                                    {/* Year */}
                                    <span
                                        className={cn(
                                            "mt-4 text-sm md:text-base transition-colors duration-300",
                                            active
                                                ? "text-white font-semibold text-xl tracking-wide"
                                                : "text-gray-300 group-hover:text-white"
                                        )}
                                    >
                                        {event.year}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Title & Description */}
                    <div className="max-w-5xl mx-auto  text-left">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeEvent.title}
                                initial={{ opacity: 0, y: activeIndex % 2 === 0 ? 40 : -40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: activeIndex % 2 === 0 ? -40 : 40 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent drop-shadow-lg">
                                    {activeEvent.title}
                                </h3>
                                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl ">
                                    {activeEvent.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Gradient Animation */}
                <style jsx>{`
          @keyframes gradient-move {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-gradient-move {
            background-size: 200% 200%;
            animation: gradient-move 4s ease infinite;
          }
        `}</style>
            </div>
        </div>
    );
};


/* Example Usage */
import vintageComputer from "@/public/assets/2025-09-24 05.50.55.jpg";

const timelineEvents: TimelineEvent[] = [
    {
        year: 1981,
        title: "IBM PC Revolution",
        description:
            "The launch of the IBM PC revolutionized personal computing and helped democratize access to technology.",
        image: vintageComputer,
    },
    {
        year: 2016,
        title: "AI Breakthrough",
        description:
            "Machine learning and AI began transforming how we interact with technology, making it more human-centered.",
        image: vintageComputer,
    },
    {
        year: 2018,
        title: "Inclusive Design",
        description:
            "A global shift toward accessibility-first design ensured technology could serve everyone equally.",
        image: vintageComputer,
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
                {/* Header */}
                <div className="text-center mb-20">

                    <div className="mb-8 relative w-full flex justify-center">
                        <h2 className="text-center font-bold tracking-tight text-black text-[40px] md:text-[53px] relative z-10">
                            What We Do
                        </h2>

                        <div className="absolute bottom-0 flex justify-center w-full left-[4%] ">
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




                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We combine training, product development, and consultancy to deliver
                        impactful tech solutions. With a focus on accessibility, innovation,
                        and local relevance, our work bridges skill gaps and builds tools
                        that matter.
                    </p>
                </div>

                {/* Timeline */}
                <Timeline events={timelineEvents} />
            </div>
        </section>
    );
};

export default WhatWeDo;
