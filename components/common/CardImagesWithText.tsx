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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Card className="w-full max-w-[350px] mx-auto border-0 shadow-lg p-0 m-0 overflow-hidden bg-white">
                <CardContent className="p-0 m-0">
                    <div className="m-[5px]">
                        <div className="relative w-full h-48 ">
                            <Image
                                src={imageSrc}
                                alt="Blog thumbnail"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="py-4 sm:py-5 px-4 sm:px-6">
                        {/* Date + Read Time */}
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2">
                            <span>{date}</span>
                            <span className="mx-1">|</span>
                            <span>{readTime}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-semibold leading-tight sm:leading-snug line-clamp-3 mb-3">
                            {title}
                        </h3>

                        {/* View Blog Link */}
                        <a
                            href="#"
                            className="flex items-center gap-1 text-[#81B041] font-medium text-sm hover:underline transition-colors duration-200"
                        >
                            View Blog
                            <ArrowUpRight className="w-4 h-4 text-[#81B041]" />
                        </a>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
