"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function HomeHero() {
    const sections = [
        { imageSrc: "/assets/traning.svg", description: "Trainings" },
        { imageSrc: "/assets/product.svg", description: "Product" },
        { imageSrc: "/assets/conseltancy.svg", description: "Consultancy" },
    ];

    return (
        <div
            className="w-full md:h-screen flex  justify-center  px-6 sm:px-10 md:px-[110px] mx-auto"
            style={{ backgroundImage: "url('./assets/hero.svg')" }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center py-20 sm:py-28 md:py-[230px]"
            >
                {/* Title */}
                <h1 className="sm:text-center font-bold leading-tight text-[clamp(28px,6vw,58px)] max-w-[980px]">
                    Democratizing Access to <br className="hidden sm:block" /> Technology
                </h1>

                {/* Description */}
                <p className="sm:text-center  text-[#626161] mt-6 mb-10 max-w-[676px] text-sm sm:text-base md:text-lg">
                    iCog is an affiliate company of iCog Labs, dedicated to democratizing
                    access to technology through training, product development and
                    consultancy
                </p>

                <div className="flex flex-col sm:flex-row justify-between md:items-center gap-6 sm:gap-10 md:gap-[100px] rounded-xl shadow-xl py-6 px-8 bg-white max-w-4xl w-full">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            className="flex gap-3 md:items-center bg-white"
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
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}