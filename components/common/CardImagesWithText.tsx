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
            <Card className="w-full max-w-[500px] h-[450px] mx-auto p-0 m-0 overflow-hidden bg-white border-0 shadow-[4px_4px_12px_0px_rgba(0,0,0,0.01),-4px_-4px_12px_0px_rgba(0,0,0,0.01)] hover:shadow-[4px_4px_16px_0px_rgba(0,0,0,0.08),-4px_-4px_16px_0px_rgba(0,0,0,0.08)] transition-shadow duration-300 ease-in-out cursor-pointer">
                <CardContent className="p-0 m-0">
                    <div className="m-[5px]">
                        {/* Fixed image height + uniform scaling */}
                        <div className="relative w-full h-[250px] rounded-2xl overflow-hidden">
                            <Image
                                src={imageSrc}
                                alt="Blog thumbnail"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="py-4 sm:py-5 px-4 sm:px-6">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2">
                            <span>{date}</span>
                            <span className="mx-1">|</span>
                            <span>{readTime}</span>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold leading-tight sm:leading-snug line-clamp-3 mb-3">
                            {title}
                        </h3>

                        <a
                            href="#"
                            className="flex items-center gap-1 text-[#81B041] font-medium text-sm transition-colors duration-200"
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
