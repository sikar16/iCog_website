"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollVideoSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    
    // Scale from small to full screen
    const scale = useTransform(scrollYProgress, [0, 0.7], [0.6, 1.1]);
    
    // Border radius - starts rounded, becomes square
    const borderRadius = useTransform(scrollYProgress, [0, 0.7], [24, 0]);
    
    // Width expansion
    const width = useTransform(scrollYProgress, [0, 0.7], ["80vw", "100vw"]);
    
    // Height expansion
    const height = useTransform(scrollYProgress, [0, 0.7], ["70vh", "100vh"]);
    
    // Text opacity - appears after video is big enough
    const textOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);

    return (
        <section ref={containerRef} className="relative h-[300vh] ">
            <div className="sticky top-0 flex items-center justify-center h-screen overflow-hidden ">
                <motion.div
                    style={{
                        scale,
                        width,
                        height,
                        borderRadius,
                    }}
                    className="relative overflow-hidden shadow-2xl bg-black"
                >
                    <video
                        src="/assets/scrollVideo.MOV"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                        onError={(e) => console.error("Video error:", e)}
                        onLoadedData={() => console.log("Video loaded successfully")}
                    />
                    
                    {/* Text Overlay */}
                    <motion.div
                        style={{
                            opacity: textOpacity,
                            y: textY,
                        }}
                        className="absolute bottom-10 left-7 sm:bottom-16 sm:left-10 md:bottom-20 md:left-20 lg:bottom-24 lg:left-24 text-white z-10"
                    >
                        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-2">
                            Join Our Team
                        </h2>
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                            Let&apos;s Work Together
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
