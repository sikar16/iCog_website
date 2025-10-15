"use client";
import { useState } from "react";
import Image from "next/image";

interface TimelineEvent {
    year: number;
    title: string;
    description: string;
}

const events: TimelineEvent[] = [
    {
        year: 1981,
        title: "IBM PC Revolution",
        description: "The launch of the IBM PC revolutionized personal computing and helped democratize access to technology and digital skills.",
    },
    {
        year: 2016,
        title: "AI & Machine Learning Boom",
        description: "Breakthrough in deep learning and neural networks transformed artificial intelligence capabilities across industries.",
    },
    {
        year: 2018,
        title: "Cloud Computing Dominance",
        description: "Enterprise cloud adoption reached critical mass, fundamentally changing how businesses deploy and scale technology.",
    },
    {
        year: 2020,
        title: "Remote Work Revolution",
        description: "Global pandemic accelerated digital transformation and remote collaboration tools became essential infrastructure.",
    },
];

export const Timeline = () => {
    const [activeEvent, setActiveEvent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleEventClick = (index: number) => {
        if (isAnimating || index === activeEvent) return;

        setIsAnimating(true);
        setActiveEvent(index);

        // Reset animation state after transition
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };

    return (
        <section className="px-6 py-36 md:py-32">
            <div className="mx-auto max-w-7xl">
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

                <p className="mx-auto mb-16 max-w-4xl text-center text-[16px] leading-relaxed text-gray-500 ">
                    We combine training, product development, and consultancy to deliver impactful tech solutions. With a focus
                    on accessibility, innovation, and local relevance, our work bridges skill gaps, builds tools that matter,
                    and supports organizations in creating meaningful change through technology
                </p>

                {/* Timeline Card */}
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl shadow-2xl bg-gray-800/80 backdrop-blur-sm">
                    <div className="absolute inset-0">
                        <Image
                            src="/file.svg"
                            alt="Background"
                            fill
                            className="object-cover blur-sm"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    <div className="relative px-8 py-16 md:px-16 md:py-20">
                        {/* Timeline */}
                        <div className="relative mb-16">
                            {/* Main Timeline Line */}
                            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-400"></div>

                            {/* Timeline Markers and Years */}
                            <div className="relative flex items-center justify-between">
                                {events.map((event, index) => (
                                    <div key={event.year} className="flex flex-col items-center">
                                        {/* Timeline Dot */}
                                        <div
                                            className={`relative z-10 transition-all duration-300 ${index === activeEvent
                                                ? 'w-4 h-4 bg-gray-300 rounded-full'
                                                : 'w-2 h-2 bg-gray-600 rounded-full'
                                                }`}
                                        >
                                            {/* Active dot connection line */}
                                            {index === activeEvent && (
                                                <div className="absolute top-1/2 left-1/2 w-px h-24 bg-gray-400 -translate-x-1/2 -translate-y-1/2"></div>
                                            )}
                                        </div>

                                        {/* Year */}
                                        <span className={`mt-3 text-sm font-medium transition-all duration-300 ${index === activeEvent ? 'text-white' : 'text-white/80'
                                            }`}>
                                            {event.year}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Active Event Content */}
                        <div className="text-center">
                            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                                {events[activeEvent].title}
                            </h3>
                            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
                                {events[activeEvent].description}
                            </p>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center gap-2 mt-12">
                            {events.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleEventClick(index)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === activeEvent
                                        ? 'bg-white w-8'
                                        : 'bg-white/40 w-1.5 hover:bg-white/60'
                                        }`}
                                    disabled={isAnimating}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};