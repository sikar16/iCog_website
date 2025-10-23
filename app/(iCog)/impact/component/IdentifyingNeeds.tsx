"use client";

import { Card } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { BusFront } from "lucide-react";

const needs = [
    {
        image: "/assets/Impact Page/photo_2025-09-24_11-56-42.jpg",
        title: "Limited access to technology education",
    },
    {
        image: "/assets/Impact Page/photo_2025-10-07_09-52-41.jpg",
        title: "Lack of localized solutions utilizing emerging technologies",
    },
    {
        image: "/assets/Impact Page/photo_2025-06-17_16-17-25.jpg",
        title: "Lack of Focus on Kids and Young People in Tech Education",
    },
];
interface IdentifyingNeedsProps {
    shouldAnimate?: boolean;
}
export default function IdentifyingNeeds({ shouldAnimate }: IdentifyingNeedsProps) {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.6,
    });

    return (
        <section
            ref={ref}
            className="flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100  py-30 sm:py-20"
        >
            <div className="max-w-6xl w-full mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-[39px] font-extrabold text-foreground mb-14 tracking-tight">
                    Identifying the Needs
                </h2>

                <div className="grid md:grid-cols-2 gap-10 justify-items-center">
                    {needs.map((need, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            animate={
                                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                            }
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                ease: "easeOut",
                            }}
                            className={`flex justify-center ${index === 2 ? "md:col-span-2 md:justify-center" : ""
                                }`}
                        >
                            <Card className="w-full max-w-[480px] md:max-w-[520px] h-[180px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center md:px-5 py-4">
                                <div className="flex items-center gap-5 w-full">
                                    {/* <motion.div className="flex-shrink-0 rounded-xl overflow-hidden w-[168px] h-[147px] shadow-sm"
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={
                                            inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                                        }
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.2,
                                            ease: "easeOut",
                                        }}
                                    >
                                        <Image
                                            src={need.image}
                                            alt={need.title}
                                            width={168}
                                            height={147}
                                            className="w-full h-[147px] object-cover rounded-xl justify-center items-center"
                                        />

                                    </motion.div> */}

                                    <motion.div
                                        className="flex-shrink-0 rounded-xl overflow-hidden w-[168px] h-[147px] shadow-sm flex items-center justify-center"
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                                    >
                                        <Image
                                            src={need.image}
                                            alt={need.title}
                                            width={168}
                                            height={147}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </motion.div>

                                    <div className="flex flex-col items-start justify-center text-left">
                                        <div className="bg-gradient-to-b from-gray-900 to-gray-300 p-2 rounded-[0px_8px_0px_8px] shadow-sm mb-3">
                                            <BusFront className="h-5 w-5 text-white" />
                                        </div>
                                        <span className="text-sm lg:text-lg font-semibold text-foreground leading-snug max-w-[260px]">
                                            {need.title}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
