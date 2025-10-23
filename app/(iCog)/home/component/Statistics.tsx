"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Statistics() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    const slideFromLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section
            ref={sectionRef}
            className="w-full py-8 md:py-[94px] px-4 sm:px-8 lg:px-8 flex lg:items-center justify-center"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 w-full lg:max-w-6xl lg:mx-auto gap-8 lg:gap-0 lg:items-center">
                {/* Image Grid */}
                <div className="w-full lg:col-span-9 lg:max-w-[630px] mx-auto lg:mx-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-0 w-full">
                        {[
                            { src: "/assets/Home Page/photo_2025-06-17_15-03-11.jpg", alt: "Conference room training session", delay: 0, col: "lg:col-span-6 lg:mt-[14px]" },
                            { src: "/assets/Home Page/photo_2025-06-17_15-22-06.jpg", alt: "Certificate presentation ceremony", delay: 0.3, col: "lg:col-span-6 lg:mt-[-18px] lg:mb-4 lg:translate-x-[1%]" },
                            { src: "/assets/Home Page/photo_2025-06-17_15-03-15.jpg", alt: "Meeting room with presentation setup", delay: 0.6, col: "lg:col-span-7 lg:mt-5" },
                            { src: "/assets/Home Page/photo_2025-06-17_15-25-37.jpg", alt: "Computer lab with training equipment", delay: 0.9, col: "lg:relative lg:top-[-14px] lg:translate-x-[-3%]" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={slideFromLeft}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ duration: 0.5, delay: item.delay }}
                                className={`overflow-hidden shadow-lg w-full ${item.col} 
                                ${index < 2
                                        ? "h-[20vh] min-h-[300px] sm:h-[260px] lg:h-[277px] lg:max-w-[299px] lg:w-[299px] rounded-2xl lg:rounded-2xl"
                                        : index === 2
                                            ? "h-[20vh] min-h-[300px] sm:h-[240px] lg:h-[243px] lg:max-w-[339px] lg:w-[339px] rounded-2xl lg:rounded-2xl"
                                            : "h-[20vh] min-h-[300px] sm:h-[260px] lg:h-[290px] lg:max-w-[333px] lg:w-[333px] rounded-2xl lg:rounded-2xl"
                                    }`}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={340}
                                    height={290}
                                    className="object-cover w-full h-full"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Statistics Text */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.7, delay: 1.1 }}
                    className="lg:col-span-3 w-full lg:w-[497px] mx-auto lg:mx-0 px-4 lg:px-0"
                >
                    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 text-center lg:text-left">
                        <div>
                            <p className="text-5xl sm:text-6xl lg:text-[64px] font-bold">9</p>
                            <p className="text-[#626161] text-sm sm:text-base lg:text-[14px] mt-2">Years of experience</p>
                        </div>
                        <div>
                            <p className="text-5xl sm:text-6xl lg:text-[60px] font-bold">24+</p>
                            <p className="text-[#626161] text-sm sm:text-base lg:text-[14px] mt-2">Cities</p>
                        </div>
                        <div>
                            <p className="text-5xl sm:text-6xl lg:text-[64px] font-bold">118K+</p>
                            <p className="text-[#626161] text-sm sm:text-base lg:text-[14px] mt-2">
                                Impacted kids and young adults
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}