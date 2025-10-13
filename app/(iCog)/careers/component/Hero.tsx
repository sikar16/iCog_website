// "use client";
// import * as React from "react";
// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Hero() {
//     const [current, setCurrent] = React.useState(0);

//     const images = [
//         "/assets/photo_2025-06-17_16-17-25.jpg",
//         "/assets/photo_2025-06-17_16-18-31.jpg",
//         "/assets/photo_2025-06-26_11-38-28.jpg",
//         "/assets/photo_2025-06-26_11-38-33.jpg",
//         "/assets/photo_2025-06-26_11-38-36.jpg",
//         "/assets/photo_2025-06-26_15-26-03.jpg",
//         "/assets/photo_2025-06-17_16-17-25.jpg",
//         "/assets/photo_2025-06-26_11-38-36.jpg",
//         "/assets/photo_2025-06-26_15-26-03.jpg",
//     ];

//     const total = images.length;

//     return (
//         <>
//             <div className="px-[90px] flex flex-col gap-8 mb-16 mt-40 text-center">
//                 <p className="text-6xl font-bold">What It Means to Work at iCog</p>
//                 <p className="max-w-2xl mx-auto text-[#818181] text-lg leading-relaxed">
//                     Working at iCog means being part of a team that&apos;s curious, creative, and committed
//                     to making a real difference. Whether you join as an intern or a full-time team member,
//                     you&apos;re welcomed into an environment that values{" "}
//                     <strong>learning</strong>, <strong>teamwork</strong>, and{" "}
//                     <strong>technology for positive change</strong>.
//                 </p>
//             </div>

//             {/* Carousel */}
//             <div className="relative max-w-7xl h-[500px] flex items-center justify-center">
//                 <div className="relative w-full h-full flex items-center justify-center">
//                     {images.map((src, index) => {
//                         // Calculate position relative to current
//                         const position = (index - current + total) % total;
//                         let distanceFromCenter = Math.min(position, total - position);

//                         // Set actual different dimensions for each position
//                         let width = 300;
//                         let height = 400;
//                         let zIndex = 30;
//                         let opacity = 1;
//                         let translateX = 0;
//                         let rotateY = 0;

//                         if (distanceFromCenter === 0) {
//                             // Center image - smallest actual size
//                             width = 200;
//                             height = 300;
//                             zIndex = 10;
//                             translateX = 10;
//                             rotateY = 10;
//                         } else if (distanceFromCenter === 1) {
//                             // First level side images - medium size
//                             width = 200;
//                             height = 300;
//                             zIndex = 20;
//                             translateX = position === 1 ? 250 : -250;
//                             rotateY = position === 1 ? -15 : 15;
//                             opacity = 1;
//                         } else if (distanceFromCenter === 2) {
//                             // Second level side images - larger  
//                             width = 200;
//                             height = 300;
//                             zIndex = 30;
//                             translateX = position === 2 ? 500 : -500;
//                             rotateY = position === 2 ? -40 : 40;
//                             opacity = 1;
//                         } else if (distanceFromCenter === 3) {
//                             // Third level side images - largest
//                             width = 200;
//                             height = 300;
//                             zIndex = 40;
//                             translateX = position === 3 ? 650 : -650;
//                             rotateY = position === 3 ? -35 : 35;
//                             opacity = 1;
//                         } else {
//                             // Further images - hidden
//                             width = 200;
//                             height = 300;
//                             zIndex = 0;
//                             translateX = position > total / 2 ? -800 : 800;
//                             opacity = 1;
//                         }

//                         return (
//                             <div
//                                 key={index}
//                                 className="absolute transition-all duration-500 ease-in-out rounded-2xl overflow-hidden shadow-2xl"
//                                 style={{
//                                     transform: `translateX(${translateX}px) rotateY(${rotateY}deg)`,
//                                     zIndex,
//                                     opacity,
//                                     width: `${width}px`,
//                                     height: `${height}px`,
//                                 }}
//                             >
//                                 <div className="w-full h-full border-none bg-transparent">
//                                     <div className="p-0 w-full h-full">
//                                         <Image
//                                             src={src}
//                                             alt={`iCog team ${index + 1}`}
//                                             width={width}
//                                             height={height}
//                                             className="object-cover w-full h-full"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Controls */}
//                 <button
//                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-3 z-50 shadow-lg"
//                     onClick={() => setCurrent((prev) => (prev + 1) % total)}
//                 >
//                     ◀
//                 </button>
//                 <button
//                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-3 z-50 shadow-lg"

//                     onClick={() => setCurrent((prev) => (prev - 1 + total) % total)}
//                 >
//                     ▶
//                 </button>

//                 {/* Indicators */}
//                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
//                     {images.map((_, index) => (
//                         <button
//                             key={index}
//                             className={`w-3 h-3 rounded-full transition-all ${index === current ? 'bg-white' : 'bg-white/50'
//                                 }`}
//                             onClick={() => setCurrent(index)}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }


// "use client"
// import Image from "next/image"
// import { useRef } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"

// export default function Features() {
//     const containerRef = useRef<HTMLDivElement>(null)

//     return (
//         <div ref={containerRef} className="bg-white">
//             <SolutionSection
//                 index={0}
//                 logoAlt="Big Truck Ethiopia Logo"
//                 title="Big Truck Ethiopia"
//                 description="iCog began in 2016 as a project under iCog Labs with a simple idea to make technology a force for good, accessible to all. It has since grown into a company focused on training, product development, and consultancy."
//                 image="/logodg2-cropped.webp"
//                 imageAlt="Digital Truck"
//             />

//             <SolutionSection
//                 index={1}
//                 logoAlt="Leyu Logo"
//                 title="Leyu"
//                 description="An open-source platform crowdsourcing language data for Ethiopian languages to improve AI and NLP tools. Leyu builds ethical, community-driven datasets in low-resource languages in Ethiopia."
//                 image="/logodg2-cropped.webp"
//                 imageAlt="Leyu Platform"
//             />

//             <SolutionSection
//                 index={2}
//                 title="Training Solution"
//                 description="Training Solution is a training facilitation platform that helps organizations design, manage, and measure training more efficiently. From structuring content to coordinating sessions and tracking outcomes, TFP streamlines the entire training process in one integrated tool."
//                 image="/logodg2-cropped.webp"
//                 imageAlt="Training Solution"
//             />
//         </div>
//     )
// }

// interface SolutionSectionProps {
//     index: number
//     logo?: string
//     logoAlt?: string
//     title?: string
//     description: string
//     image: string
//     imageAlt: string
// }

// function SolutionSection({ index, logo, logoAlt, title, description, image, imageAlt }: SolutionSectionProps) {
//     const sectionRef = useRef<HTMLDivElement>(null)
//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start end", "end start"],
//     })

//     const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 0], [0.8, 1, 1, 1.95])
//     const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])
//     const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50])
//     const grayscale = useTransform(
//         scrollYProgress,
//         index === 0
//             ? [0, 0]
//             : [0, 0.5, 0.7, 0.9, 1],
//         index === 0
//             ? ["grayscale(0%)", "grayscale(0%)"]
//             : [
//                 "grayscale(0%)",
//                 "grayscale(0%)",
//                 "grayscale(100%)",
//                 "grayscale(0%)",
//                 "grayscale(0%)"
//             ]
//     )

//     const isOdd = index % 2 !== 0

//     return (
//         <motion.div
//             ref={sectionRef}
//             style={{ scale, opacity, y }}
//             className="sticky top-[30%] px-4 md:px-20 bg-white pb-5 flex items-center"
//         >
//             <div className={`flex flex-col rounded-4xl shadow-xl ${isOdd ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between h-[500px] w-full`}>
//                 <div className="md:w-[600px] text-center md:text-left p-[77px]">
//                     {title && !logo && (
//                         <motion.div
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8 }}
//                             viewport={{ once: true }}
//                             className="mb-8"
//                         >
//                             <h3 className="text-4xl md:text-5xl font-bold text-black">{title}</h3>
//                         </motion.div>
//                     )}

//                     <motion.p
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                         viewport={{ once: true }}
//                         className="text-black leading-relaxed text-base md:text-lg"
//                     >
//                         {description}
//                     </motion.p>

//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.4 }}
//                         viewport={{ once: true }}
//                         className="mt-8"
//                     >
//                         <button className="inline-flex items-center px-5 py-2 rounded-[0px_8px_0px_8px] bg-black text-white hover:bg-gray-800 transition-all">
//                             Read more <span className="text-sm">↗</span>
//                         </button>
//                     </motion.div>
//                 </div>

//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8 }}
//                     style={{ filter: grayscale }}
//                     viewport={{ once: true }}
//                     className="relative w-full md:w-[500px] bg-gradient-to-tr from-[#0A213C] to-[#6D3431] rounded-xl overflow-hidden h-[400px] md:h-[500px]"
//                 >
//                     <Image
//                         src={image}
//                         alt={imageAlt}
//                         fill
//                         className="rounded-xl object-cover"
//                     />
//                     <div className="absolute inset-0 bg-black/10"></div>
//                 </motion.div>
//             </div>
//         </motion.div>
//     )
// }


"use client"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import team1 from "../../../../public/2025-10-10 10.32.39.jpg";
import team2 from "../../../../public/2025-10-10 10.32.39.jpg";
import team3 from "../../../../public/2025-10-10 10.32.39.jpg";
import team4 from "../../../../public/2025-10-10 10.32.39.jpg";
import team5 from "../../../../public/2025-10-10 10.32.39.jpg";
import team6 from "../../../../public/2025-10-10 10.32.39.jpg";
import team7 from "../../../../public/2025-10-10 10.32.39.jpg";

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
