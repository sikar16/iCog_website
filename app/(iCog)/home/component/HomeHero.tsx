"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function HomeHero() {
    const sections = [
        { imageSrc: "/assets/Pillars/traning.svg", description: "Training", target: "/about/#training" },
        { imageSrc: "/assets/Pillars/product.svg", description: "Product", target: "/about/#product" },
        { imageSrc: "/assets/Pillars/conseltancy.svg", description: "Consultancy", target: "/about/#consultancy" },
    ];

    return (
        <div
            className="w-full h-[80vh] flex  justify-center  px-6 sm:px-10 md:px-[100px] mx-auto "
            style={{ backgroundImage: "url('./assets/hero.svg')" }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center py-[150px] md:py-[200px]"
            >
                {/* Title */}
                <h1 className="sm:text-center font-bold leading-tight text-[clamp(28px,6vw,58px)] max-w-[980px]">
                    Democratizing access to <br className="hidden sm:block" />technology

                </h1>

                {/* Description */}
                <p className="sm:text-center  text-[#626161] mt-6 mb-10 max-w-[676px] text-sm sm:text-base md:text-lg">
                    iCog is an affiliate of iCog labs, dedicated to democratizing access to technology through training, product development and consultancy .
                </p>

                <div className="flex flex-col sm:flex-row justify-between md:items-center gap-6 sm:gap-10 md:gap-[100px] rounded-xl shadow-xl py-6 px-8 bg-white max-w-4xl w-full">
                    {sections.map((section, index) => (
                        <motion.a
                            key={index}
                            href={section.target}
                            className="flex gap-3 md:items-center bg-white cursor-pointer hover:text-gray-900 transition-all"
                        >
                            <Image
                                src={section.imageSrc}
                                alt={section.description}
                                width={24}
                                height={24}
                            />
                            <p className="text-base sm:text-[16.67px] font-medium">
                                {section.description}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}