"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(3);
    const containerRef = useRef<HTMLDivElement>(null);
    const isScrolling = useRef(false);

    const images = [
        "/assets/2025-09-24 05.50.48.jpg",
        "/assets/2025-09-24 05.51.11.jpg",
        "/assets/2025-09-24 05.50.55.jpg",
        "/assets/2025-09-24 05.51.02.jpg",
        "/assets/2025-09-24 05.51.50.jpg",
        "/assets/2025-09-24 05.50.55.jpg",
        "/assets/2025-09-24 05.51.55.jpg",
    ];

    // Wheel scroll
    const handleWheel = (e: WheelEvent) => {
        if (isScrolling.current) return;
        isScrolling.current = true;
        setCurrentIndex((prev) => (e.deltaY > 0 ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length));
        setTimeout(() => (isScrolling.current = false), 500);
    };

    // Touch swipe
    const touchStartX = useRef();
    const handleTouchStart = (e: React.TouchEvent) => (touchStartX.current = e.touches[0].clientX);
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (isScrolling.current) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            isScrolling.current = true;
            setCurrentIndex((prev) =>
                diff > 0 ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length
            );
            setTimeout(() => (isScrolling.current = false), 500);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        container.addEventListener("wheel", handleWheel, { passive: false });
        return () => container.removeEventListener("wheel", handleWheel);
    }, []);

    return (
        <div className="w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-background py-36">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-32">
                <h1 className="text-[53px] font-bold mb-4 text-foreground">
                    What It Means to Work at iCog </h1>
                <p className="text-[16px] text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Working at iCog means being part of a team that&apos;s curious, creative, and committed to making a real difference. Whether you join as an intern or a full-time team member, you&apos;re welcomed into an environment that values{" "}
                    <span className="font-semibold text-foreground">learning</span>,{" "}
                    <span className="font-semibold text-foreground">team-work</span> and{" "}
                    <span className="font-semibold text-foreground">technology for positive change</span>.
                </p>
            </div>

            {/* Fullscreen Carousel */}
            <div
                ref={containerRef}
                className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing  gap-10 space-x-6"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className="relative w-full h-full flex items-center justify-center " style={{ perspective: "2000px" }}>
                    {images.map((src, index) => {
                        const total = images.length;
                        const centerIndex = currentIndex;
                        const distanceFromCenter = index - centerIndex;
                        const wrappedDistance = ((distanceFromCenter + total) % total) % total;
                        const displayDistance = wrappedDistance > total / 2 ? wrappedDistance - total : wrappedDistance;

                        const visibleRange = 3; // visible images
                        if (Math.abs(displayDistance) > visibleRange) return null;

                        // Fixed size
                        const cardWidth = 300;
                        const cardHeight = 400;

                        // Spacing across full width
                        const maxAngle = 45; // max angle for side images
                        const angleStep = maxAngle / visibleRange;
                        const angle = displayDistance * angleStep;
                        const radius = window.innerWidth / 2 - cardWidth / 2;
                        const translateX = Math.sin((angle * Math.PI) / 120) * radius;
                        const translateY = Math.cos((angle * Math.PI) / -100) * 30; // slight vertical arc

                        // Rotation
                        const rotateY = -angle;

                        // Layering
                        const zIndex = Math.abs(displayDistance);

                        return (
                            <div
                                key={index}
                                className="absolute transition-all duration-700 ease-out"
                                style={{
                                    transform: `translateX(${translateX}px) translateY(${translateY}px) rotateY(${rotateY}deg)`,
                                    zIndex: zIndex,
                                    width: `${cardWidth}px`,
                                    height: `${cardHeight}px`,
                                }}
                            >
                                <div className="overflow-hidden rounded-2xl shadow-2xl w-full h-full">
                                    <Image
                                        src={src}
                                        alt={`iCog team ${index}`}
                                        width={cardWidth}
                                        height={cardHeight}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
