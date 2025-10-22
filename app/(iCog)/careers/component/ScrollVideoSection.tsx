"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollVideoSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0.6]);
    const y = useTransform(scrollYProgress, [0.7, 1], ["0%", "0%"]);

    return (
        <section ref={containerRef} className="relative h-[800px] ">
            <div className="sticky top-0 flex items-center justify-center h-screen overflow-hidden ">
                <motion.div
                    style={{
                        scale,
                        y,
                    }}
                    className="w-[80vw] max-w-6xl h-[45vh] md:h-[60vh] lg:h-[70vh] rounded-3xl overflow-hidden shadow-2xl"
                >
                    <video
                        src="/assets/video/Video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

        </section>
    );
}
