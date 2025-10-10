"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface CardImagesWithTextProps {
    date?: string;
    readTime?: string;
    title?: string;
    children?: ReactNode;
    imageSrc?: string;
}

export default function CardImagesWithText({
    date = "",
    readTime = "",
    title = "",
    imageSrc = "",
}: CardImagesWithTextProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}    // moves up & fades in
            transition={{ duration: 0.8, ease: "easeOut" }} // smooth timing
        >
            <Card className="w-full max-w-[350px] mx-auto border-0 shadow-lg rounded-lg mb-[14px]">
                <CardContent className="p-0">
                    {/* Image Container */}
                    <div className="relative w-full h-48 overflow-hidden rounded-lg">
                        <Image
                            src={imageSrc}
                            alt="Blog thumbnail"
                            fill
                            className="object-cover rounded-[0px] p-[5px]"
                        />
                    </div>

                    {/* Content */}
                    <div className="py-4 sm:py-5 px-4 sm:px-6">
                        <div className="flex flex-col">
                            {/* Date + Read Time */}
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-0">
                                <span>{date}</span>
                                <span className="mx-1">|</span>
                                <span>{readTime}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-base sm:text-lg font-semibold leading-tight sm:leading-snug line-clamp-3 min-h-[4.5rem] sm:min-h-[5rem] mt-[10px]">
                                {title}
                            </h3>

                            {/* View Blog Link */}
                            <a
                                href="#"
                                className="flex items-center gap-1 text-[#81B041] font-medium text-sm hover:underline transition-colors duration-200 mt-[-10px]"
                            >
                                View Blog
                                <ArrowUpRight className="w-4 h-4 text-[#81B041]" />
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
