"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
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
        <section className="px-6 py-20 md:py-32">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-8 text-center font-bold tracking-tight text-black md:text-[53px]">
                    What We Do
                </h2>
                <p className="mx-auto mb-16 max-w-4xl text-center text-lg leading-relaxed text-gray-600 md:text-xl">
                    We combine training, product development, and consultancy to deliver impactful tech solutions. With a focus
                    on accessibility, innovation, and local relevance, our work bridges skill gaps, builds tools that matter,
                    and supports organizations in creating meaningful change through technology
                </p>

                {/* Timeline Card */}
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl shadow-2xl">
                    <div className="absolute inset-0">
                        <Image
                            src="/file.svg"
                            alt="IBM PC workspace"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>

                    <div className="relative px-8 py-12 md:px-16 md:py-16">
                        {/* Timeline Navigation */}
                        <div className="mb-12 flex items-center justify-center gap-4 md:gap-8 lg:gap-16">
                            {events.map((event, index) => (
                                <div key={event.year} className="flex items-center">
                                    {/* Year Button */}
                                    <button
                                        onClick={() => handleEventClick(index)}
                                        className={`group flex flex-col items-center transition-all duration-300 ${index === activeEvent
                                            ? 'scale-110'
                                            : 'hover:scale-105'
                                            }`}
                                        disabled={isAnimating}
                                    >
                                        <div
                                            className={`mb-2 h-3 w-3 rounded-full transition-all duration-300 ${index === activeEvent
                                                ? 'bg-white scale-150'
                                                : 'bg-white/50 group-hover:bg-white/80'
                                                }`}
                                        />
                                        <span
                                            className={`font-bold transition-all duration-300 ${index === activeEvent
                                                ? 'text-white text-xl md:text-2xl'
                                                : 'text-white/70 text-lg md:text-xl group-hover:text-white/90'
                                                }`}
                                        >
                                            {event.year}
                                        </span>
                                    </button>

                                    {/* Connector Line (except for last item) */}
                                    {index < events.length - 1 && (
                                        <div
                                            className={`h-px mx-2 md:mx-4 lg:mx-8 transition-all duration-500 ${index === activeEvent || index + 1 === activeEvent
                                                ? 'bg-white w-12 md:w-16 lg:w-24'
                                                : 'bg-white/30 w-8 md:w-12 lg:w-16'
                                                }`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Animated Content */}
                        <div className="relative h-64 md:h-56">
                            {events.map((event, index) => (
                                <div
                                    key={event.year}
                                    className={`absolute inset-0 text-center transition-all duration-500 ${index === activeEvent
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-8 pointer-events-none'
                                        }`}
                                >
                                    <h3 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
                                        {event.title}
                                    </h3>
                                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 md:text-lg lg:text-xl">
                                        {event.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center gap-3 mt-8">
                            {events.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleEventClick(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === activeEvent
                                        ? 'bg-white w-8'
                                        : 'bg-white/30 w-2 hover:bg-white/60'
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