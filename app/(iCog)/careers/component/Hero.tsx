"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(3);
    const containerRef = useRef<HTMLDivElement>(null);
    const isScrolling = useRef(false);

    const images = [
        "/assets/photo_2025-06-17_16-17-25.jpg",
        "/assets/photo_2025-06-17_16-18-31.jpg",
        "/assets/photo_2025-06-26_11-38-28.jpg",
        "/assets/photo_2025-06-26_11-38-33.jpg",
        "/assets/photo_2025-06-26_11-38-36.jpg",
        "/assets/photo_2025-06-26_15-26-03.jpg",
        "/assets/2025-09-24 05.50.48.jpg",
    ];

    // Handle wheel scroll
    const handleWheel = (e: WheelEvent) => {
        if (isScrolling.current) return;

        isScrolling.current = true;

        if (e.deltaY > 0) {
            // Scroll down - move to next
            setCurrentIndex((prev) => (prev + 1) % images.length);

        } else {
            // Scroll up - move to previous
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        }

        setTimeout(() => {
            isScrolling.current = false;
        }, 500);
    };

    // Handle touch swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        touchStartX.current = touch.clientX;
    };

    const touchStartX = useRef(0);

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (isScrolling.current) return;

        const touch = e.changedTouches[0];
        const diff = touchStartX.current - touch.clientX;

        if (Math.abs(diff) > 50) { // Minimum swipe distance
            isScrolling.current = true;

            if (diff > 0) {
                // Swipe left - next
                setCurrentIndex((prev) => (prev + 1) % images.length);
            } else {
                // Swipe right - previous
                setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            }

            setTimeout(() => {
                isScrolling.current = false;
            }, 500);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
            return () => container.removeEventListener('wheel', handleWheel);
        }
    }, []);

    return (
        <div className="w-full py-36 px-4 md:px-8 lg:px-16 overflow-hidden">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-32">
                <h1 className="text-[53px] font-bold mb-4 text-foreground">
                    What It Means to Work at iCog
                </h1>
                <p className="text-[16px]  text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Working at iCog means being part of a team that&apos;s curious, creative, and committed
                    to making a real difference. Whether you join as an intern or a full-time team member,
                    you&apos;re welcomed into an environment that values{" "}
                    <span className="font-semibold text-foreground">learning</span>,{" "}
                    <span className="font-semibold text-foreground">team-work</span> and{" "}
                    <span className="font-semibold text-foreground">technology for positive change</span>.
                </p>
            </div>

            {/* Gentle Arc Layout */}
            <div
                ref={containerRef}
                className="relative w-full max-w-[1400px] mx-auto h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="relative flex items-end justify-center w-full"
                    style={{ perspective: "1000px" }}
                >
                    {images.map((src, index) => {
                        const total = images.length;
                        const centerIndex = currentIndex;
                        const distanceFromCenter = index - centerIndex;
                        const wrappedDistance = ((distanceFromCenter + Math.floor(total / 2) + total) % total) - Math.floor(total / 2);

                        const arcRadius = 1000;
                        const maxAngle = 40; // Increased angle to show half images at edges

                        // Calculate angle based on distance from center
                        const angle = (wrappedDistance / (total / 2)) * maxAngle;

                        // Calculate position along arc
                        const translateX = Math.sin((angle * Math.PI) / 180) * arcRadius;
                        const translateY = -Math.cos((angle * Math.PI) / 4000) * arcRadius + arcRadius;

                        // DEPTH EFFECT with background handling
                        let translateZ, opacity;

                        if (Math.abs(wrappedDistance) <= 3) {
                            // Visible images - closer to screen
                            translateZ = Math.abs(wrappedDistance) * 80;
                            opacity = 1 - Math.abs(wrappedDistance) * 0.1;
                        } else {
                            // Background images - far away and almost invisible
                            translateZ = -100; // Push to background
                            opacity = 0.1; // Almost invisible
                        }

                        // Equal scale for all visible images
                        const scale = 1;

                        // Rotation - left images rotate right, right images rotate left
                        const rotateY = -angle * 2;

                        // Z-index for proper layering
                        const zIndex = 50 - Math.abs(wrappedDistance);

                        // Clip images at the edges to show half
                        const clipPath = Math.abs(wrappedDistance) === 7 ?
                            wrappedDistance > 0 ?
                                'inset(0 50% 0 0)' : // Right edge - show left half
                                'inset(0 0 0 50%)'   // Left edge - show right half
                            : 'inset(0 0 0 0)';      // Full image

                        return (
                            <div
                                key={index}
                                className="absolute transition-all duration-700 ease-out"
                                style={{
                                    transform: `
                                        translateX(${translateX}px)
                                        translateY(${translateY}px)
                                        translateZ(${translateZ}px)
                                        rotateY(${rotateY}deg)
                                        scale(${scale})
                                    `,
                                    transformStyle: "preserve-3d",
                                    zIndex: zIndex,
                                    opacity: opacity,
                                    clipPath: clipPath,
                                    pointerEvents: Math.abs(wrappedDistance) > 3 ? 'none' : 'auto',
                                }}
                            >
                                <div className="w-[200px] h-[250px] overflow-hidden border-none shadow-2xl rounded-2xl ">
                                    <div className="p-0 w-full h-full">
                                        <Image
                                            src={src}
                                            alt={`iCog team ${index + 1}`}
                                            width={200}
                                            height={250}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Scroll Instructions */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50  px-4 py-2 rounded-full text-sm">
                    Scroll or swipe to navigate
                </div>

                {/* Gradient Overlays for edges */}
                <div className="absolute left-0 top-0 bottom-0 w-60 pointer-events-none z-40" />
                <div className="absolute right-0 top-0 bottom-0 w-60  pointer-events-none z-40" />
            </div>
        </div>
    );
}