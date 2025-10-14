"use client"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import team1 from "../../../../public/assets/2025-09-24 05.50.48.jpg";
import team2 from "../../../../public/assets/2025-09-24 05.50.48.jpg";
import team3 from "../../../../public/assets/2025-09-24 05.50.48.jpg";
import team4 from "../../../../public/assets/2025-09-24 05.50.48.jpg";
import team5 from "../../../../public/assets/2025-09-24 05.50.48.jpg";
import team6 from "../../../../public/assets/2025-09-24 05.50.48.jpg";
import team7 from "../../../../public/assets/2025-09-24 05.50.42.jpg";

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(3);

    const images = [team1, team2, team3, team4, team5, team6, team7];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-20">
                <h1 className="text-[53px] font-bold mb-6 text-foreground">
                    What It Means to Work at iCog
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Working at iCog means being part of a team that's curious, creative, and committed
                    to making a real difference. Whether you join as an intern or a full-time team member,
                    you're welcomed into an environment that values{" "}
                    <span className="font-semibold text-foreground">learning</span>,{" "}
                    <span className="font-semibold text-foreground">team-work</span> and{" "}
                    <span className="font-semibold text-foreground">technology for positive change</span>.
                </p>
            </div>

            {/* 3D Arc/Half-Circle Card Layout */}
            <div className="relative w-full max-w-[1600px] mx-auto h-[500px] perspective-container">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="relative w-full h-full"
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {images.map((src, index) => {
                            // Circular distance (infinite loop)
                            const distanceFromCenter =
                                ((index - currentIndex + images.length + Math.floor(images.length / 2)) %
                                    images.length) -
                                Math.floor(images.length / 2);

                            const absDistance = Math.abs(distanceFromCenter);

                            const radius = 800;
                            const angle = distanceFromCenter * 20;
                            const angleRad = (angle * Math.PI) / 180;

                            const translateX = Math.sin(angleRad) * radius;
                            const translateZ = -Math.cos(angleRad) * radius + radius - 200;
                            const scale = 0.7 + absDistance * 0.13;
                            const rotateY = -angle;
                            const opacity = absDistance > 3 ? 0 : 1;
                            const visibility = absDistance > 3 ? "hidden" : "visible";

                            return (
                                <div
                                    key={index}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        transform: `
                      translateX(${translateX}px)
                      translateZ(${translateZ}px)
                      rotateY(${rotateY}deg)
                      scale(${scale})
                    `,
                                        transformStyle: "preserve-3d",
                                        transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                        opacity: opacity,
                                        visibility: visibility,
                                        zIndex: Math.round(50 - translateZ),
                                    }}
                                >
                                    <Card className="w-[280px] h-[380px] overflow-hidden border-none shadow-2xl rounded-3xl bg-card">
                                        <CardContent className="p-0 w-full h-full">
                                            <img
                                                src={src}
                                                alt={`iCog team ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-8 top-1/2 -translate-y-1/2 z-50 bg-background/90 hover:bg-background shadow-lg rounded-full w-12 h-12"
                    onClick={handlePrev}
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-8 top-1/2 -translate-y-1/2 z-50 bg-background/90 hover:bg-background shadow-lg rounded-full w-12 h-12"
                    onClick={handleNext}
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/70 to-transparent pointer-events-none z-40" />
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/70 to-transparent pointer-events-none z-40" />
            </div>
        </div>
    );
}
