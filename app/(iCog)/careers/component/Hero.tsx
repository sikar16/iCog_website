"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(3);
    const [windowWidth, setWindowWidth] = useState(1200);
    const containerRef = useRef<HTMLDivElement>(null);
    const isScrolling = useRef(false);

    const images = [
        "/assets/Career/photo_2025-10-21_16-36-24.jpg",
        "/assets/Career/photo_2025-10-21_14-10-24.jpg",
        "/assets/Career/photo_2025-10-21_14-10-29.jpg",
        "/assets/Career/IMG_4528.PNG",
        "/assets/Career/photo_2025-10-21_16-36-15.jpg",
        "/assets/Career/photo_2025-10-21_16-36-11.jpg",

    ];
    const handleWheel = useCallback((e: WheelEvent) => {
        if (isScrolling.current) return;
        isScrolling.current = true;
        setCurrentIndex((prev) => (e.deltaY > 0 ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length));
        setTimeout(() => (isScrolling.current = false), 500);
    }, [images.length]);
    const touchStartX = useRef<number>(0);

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
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
        }

        const container = containerRef.current;
        if (!container) return;
        container.addEventListener("wheel", handleWheel, { passive: false });
        return () => container.removeEventListener("wheel", handleWheel);
    }, [handleWheel]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-background mt-[-60px]">
            <div className="max-w-4xl mx-auto text-center mb-32 px-4">
                <h1 className="text-[40px] md:text-[53px] font-bold mb-4 text-foreground">
                    What It Means to Work at iCog </h1>
                <p className="text-[16px] text-muted-foreground leading-relaxed max-w-3xl mx-auto ">
                    Working at iCog means being part of a team that&apos;s curious, creative, and committed to making a real difference. Whether you join as an intern or a full-time team member, you&apos;re welcomed into an environment that values{" "}
                    <span className="font-semibold text-foreground">learning</span>,{" "}
                    <span className="font-semibold text-foreground">team-work</span> and{" "}
                    <span className="font-semibold text-foreground">technology for positive change</span>.
                </p>
            </div>

            <div
                ref={containerRef}
                className="relative w-full flex items-center justify-center cursor-grab active:cursor-grabbing  gap-10 space-x-6 my-16"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className="relative w-full flex items-center justify-center " style={{ perspective: "2000px" }}>
                    {images.map((src, index) => {
                        const total = images.length;
                        const centerIndex = currentIndex;
                        const distanceFromCenter = index - centerIndex;
                        const wrappedDistance = ((distanceFromCenter + total) % total) % total;
                        const displayDistance = wrappedDistance > total / 2 ? wrappedDistance - total : wrappedDistance;
                        const visibleRange = 3;
                        if (Math.abs(displayDistance) > visibleRange) return null;
                        const cardWidth = 250;
                        const cardHeight = 300;
                        const maxAngle = 45;
                        const angleStep = maxAngle / visibleRange;
                        const angle = displayDistance * angleStep;
                        const radius = windowWidth / 2 - cardWidth / 2;
                        const translateX = Math.sin((angle * Math.PI) / 120) * radius;
                        const translateY = Math.cos((angle * Math.PI) / -100) * 30;
                        const rotateY = -angle;
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
