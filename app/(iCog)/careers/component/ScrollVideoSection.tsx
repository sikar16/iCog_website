"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollVideoSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Track scroll relative to section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "center end"], // starts at center of viewport
    });

    // Scale width & height from 50% to 100% after center
    const width = useTransform(scrollYProgress, [0, 1], ["50%", "90%"]);
    const height = useTransform(scrollYProgress, [0, 1], ["50%", "70%"]);

    // Optional text animation
    const opacityText = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
    const yText = useTransform(scrollYProgress, [0.5, 1], [90, 0]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[200vh] bg-gradient-to-b from-gray-50 to-gray-200 overflow-hidden"
        >
            {/* Sticky video container */}
            <motion.div className="sticky top-[20%] transform -translate-y-1/2 flex items-center justify-center h-screen">
                <motion.div style={{ width, height }} className="relative flex items-center justify-center">
                    <video
                        src="/assets/video/Video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded-3xl shadow-2xl"
                    />

                    {/* Animated text overlay */}
                    <motion.div
                        style={{ opacity: opacityText, y: yText }}
                        className="absolute left-10 bottom-10 text-white text-left"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]">
                            Join Our Team <br />
                            Let’s Work Together
                        </h2>

                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
