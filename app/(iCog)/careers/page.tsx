// import React from 'react'
// import CultureSection from './component/CultureSection'
// import JoinOurTeam from './component/JoinOurTeam'
// import ScrollVideoSection from './component/ScrollVideoSection'
// import TalentRosterForm from './component/TalentRosterForm'
// import Hero from './component/Hero'
// import { motion } from "framer-motion"

// export default function page() {
//     return (
//         <div className="">
//             <div className="relative w-full h-[200vh]">
//                 <motion.div className="sticky top-0 h-screen" style={{ scale: heroScale, opacity: heroOpacity }}>
//                     <Hero />
//                 </motion.div>

//                 <motion.div className="sticky top-0 h-screen" style={{ scale: cultureScale, opacity: cultureOpacity, y: cultureY }}>
//                     <CultureSection />
//                 </motion.div>
//             </div>

// <JoinOurTeam />
// <ScrollVideoSection />
// <TalentRosterForm />

//         </div>
//     )
// }


"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CultureSection from './component/CultureSection';
import Hero from './component/Hero';
import JoinOurTeam from "./component/JoinOurTeam";
import ScrollVideoSection from "./component/ScrollVideoSection";
import TalentRosterForm from "./component/TalentRosterForm";

export default function Page() {
    const containerRef = useRef<HTMLDivElement>(null);

    // useScroll tracks the scroll progress of the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"], // entire container
    });

    // Hero section animations
    const heroScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 1]);
    const heroOpacity = useTransform(scrollYProgress, [1, 1, 1], [1, 1, 1]);

    // CultureSection animations
    const cultureScale = useTransform(scrollYProgress, [1, 1, 1], [1, 1, 1]);
    const cultureOpacity = useTransform(scrollYProgress, [1, 1, 1], [1, 1, 1]);
    const cultureY = useTransform(scrollYProgress, [0.4, 0.6, 1], [50, 0, 0]);

    return (
        <div>
            <div ref={containerRef} className="relative w-full h-[200vh]">
                {/* Hero */}
                <motion.div
                    className="sticky top-0 h-screen"
                    style={{ scale: heroScale, opacity: heroOpacity }}
                >
                    <Hero />
                </motion.div>

                {/* Culture Section */}
                <motion.div
                    className="sticky top-0 h-screen"
                    style={{ scale: cultureScale, opacity: cultureOpacity, y: cultureY }}
                >
                    <CultureSection />
                </motion.div>

            </div>
            <JoinOurTeam />
            <ScrollVideoSection />
            <TalentRosterForm />
        </div>

    );
}
