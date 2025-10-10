"use client"
import { useState } from "react";
import { Card } from "@/components/ui/card";

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

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-16">
            {/* Timeline Container */}
            <div className="relative">
                {/* Horizontal Line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-timeline-line" />

                {/* Timeline Points */}
                <div className="flex justify-between items-start relative">
                    {events.map((event, index) => (
                        <div
                            key={event.year}
                            className="flex flex-col items-center cursor-pointer transition-all duration-300"
                            onMouseEnter={() => setActiveEvent(index)}
                        >
                            {/* Year Label */}
                            <div className={`text-sm font-medium mb-8 transition-colors duration-300 ${activeEvent === index ? "text-timeline-active" : "text-muted-foreground"
                                }`}>
                                {event.year}
                            </div>

                            {/* Dot */}
                            <div className="relative -mt-8">
                                <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${activeEvent === index
                                    ? "bg-timeline-active border-timeline-active scale-125"
                                    : "bg-timeline-dot border-timeline-line"
                                    }`} />
                            </div>

                            {/* Vertical Connector Line */}
                            <div
                                className={`w-0.5 transition-all duration-500 ${activeEvent === index
                                    ? "h-24 bg-timeline-active"
                                    : "h-16 bg-timeline-connector"
                                    }`}
                            />
                        </div>
                    ))}
                </div>

                {/* Event Card */}
                <div className="mt-8 min-h-[200px]">
                    <Card className="p-8 bg-card border-border shadow-lg transition-all duration-500 hover:shadow-xl">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-foreground">
                                {events[activeEvent].title}
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {events[activeEvent].description}
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};
