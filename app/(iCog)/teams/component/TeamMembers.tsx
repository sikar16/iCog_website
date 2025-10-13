"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Member {
    id: number;
    name: string;
    role: string;
    image: string;
    hoverImage: string;
    description: string;
}

const boardMembers: Member[] = [
    {
        id: 1,
        name: "Hasset Allene",
        role: "Marketing Assistant",
        image: "/assets/2025-09-24 05.50.42.jpg",
        hoverImage: "/assets/2025-09-24 05.51.50.jpg",
        description: "Hi, I'm Hasset — a lover of good quotes, great books, and meaningful moments...",
    },
    {
        id: 2,
        name: "Melat Kassaye",
        role: "Junior UI/UX Designer",
        image: "/assets/2025-09-24 05.50.42.jpg",
        hoverImage: "/team/melat2.jpg",
        description: "Melat is a creative designer passionate about crafting intuitive interfaces...",
    },
    {
        id: 3,
        name: "Betelhem Dereselign",
        role: "Web Designer & Developer",
        image: "/team/betelhem1.jpg",
        hoverImage: "/team/betelhem2.jpg",
        description: "Betelhem specializes in creating responsive web experiences...",
    },
    {
        id: 4,
        name: "Selam Kebede",
        role: "Web Designer & Developer",
        image: "/team/selam1.jpg",
        hoverImage: "/team/selam2.jpg",
        description: "Selam is a versatile developer blending creativity with clean, efficient code...",
    },
    {
        id: 5,
        name: "Hasset Allene",
        role: "Marketing Assistant",
        image: "/assets/2025-09-24 05.50.42.jpg",
        hoverImage: "/assets/2025-09-24 05.51.50.jpg",
        description: "Hi, I'm Hasset — a lover of good quotes, great books, and meaningful moments...",
    },
    {
        id: 6,
        name: "Melat Kassaye",
        role: "Junior UI/UX Designer",
        image: "/assets/2025-09-24 05.50.42.jpg",
        hoverImage: "/team/melat2.jpg",
        description: "Melat is a creative designer passionate about crafting intuitive interfaces...",
    },
    {
        id: 7,
        name: "Betelhem Dereselign",
        role: "Web Designer & Developer",
        image: "/team/betelhem1.jpg",
        hoverImage: "/team/betelhem2.jpg",
        description: "Betelhem specializes in creating responsive web experiences...",
    },
    {
        id: 8,
        name: "Selam Kebede",
        role: "Web Designer & Developer",
        image: "/team/selam1.jpg",
        hoverImage: "/team/selam2.jpg",
        description: "Selam is a versatile developer blending creativity with clean, efficient code...",
    },
];

const youthAdvisory: Member[] = [
    {
        id: 1,
        name: "Hasset Allene",
        role: "Marketing Assistant",
        image: "/assets/2025-09-24 05.50.42.jpg",
        hoverImage: "/assets/2025-09-24 05.51.50.jpg",
        description: "Hi, I'm Hasset — a lover of good quotes, great books, and meaningful moments...",
    },
    {
        id: 2,
        name: "Melat Kassaye",
        role: "Junior UI/UX Designer",
        image: "/assets/2025-09-24 05.50.42.jpg",
        hoverImage: "/team/melat2.jpg",
        description: "Melat is a creative designer passionate about crafting intuitive interfaces...",
    },
    {
        id: 3,
        name: "Betelhem Dereselign",
        role: "Web Designer & Developer",
        image: "/team/betelhem1.jpg",
        hoverImage: "/team/betelhem2.jpg",
        description: "Betelhem specializes in creating responsive web experiences...",
    },
    {
        id: 4,
        name: "Selam Kebede",
        role: "Web Designer & Developer",
        image: "/team/selam1.jpg",
        hoverImage: "/team/selam2.jpg",
        description: "Selam is a versatile developer blending creativity with clean, efficient code...",
    },
    {
        id: 5,
        name: "Hasset Allene",
        role: "Marketing Assistant",
        image: "/assets/2025-09-24 05.50.42.jpg",
        hoverImage: "/assets/2025-09-24 05.51.50.jpg",
        description: "Hi, I’m Hasset — a lover of good quotes, great books, and meaningful moments...",
    },
    {
        id: 6,
        name: "Melat Kassaye",
        role: "Junior UI/UX Designer",
        image: "/assets/2025-09-24 05.50.42.jpg",
        hoverImage: "/team/melat2.jpg",
        description: "Melat is a creative designer passionate about crafting intuitive interfaces...",
    },
    {
        id: 7,
        name: "Betelhem Dereselign",
        role: "Web Designer & Developer",
        image: "/team/betelhem1.jpg",
        hoverImage: "/team/betelhem2.jpg",
        description: "Betelhem specializes in creating responsive web experiences...",
    },
    {
        id: 8,
        name: "Selam Kebede",
        role: "Web Designer & Developer",
        image: "/team/selam1.jpg",
        hoverImage: "/team/selam2.jpg",
        description: "Selam is a versatile developer blending creativity with clean, efficient code...",
    },
];

export default function TeamMembers() {
    const [activeTab, setActiveTab] = useState("board");
    const [hovered, setHovered] = useState<number | null>(null);
    const [hoverPosition, setHoverPosition] = useState<{ top: number; left: number; width: number } | null>(null);

    const gridRef = useRef<HTMLDivElement>(null);
    const columns = 4;

    const members = activeTab === "board" ? boardMembers : youthAdvisory;
    const hoveredIndex = members.findIndex((m) => m.id === hovered);
    const descriptionIndex = hoveredIndex !== -1 ? hoveredIndex + columns : null;
    const isLastRow = hoveredIndex !== -1 && hoveredIndex + columns >= members.length;

    useEffect(() => {
        if (!hovered || !gridRef.current) return;
        const card = gridRef.current.querySelector(`[data-id="${hovered}"]`) as HTMLElement | null;
        if (card) {
            const rect = card.getBoundingClientRect();
            const gridRect = gridRef.current.getBoundingClientRect();
            setHoverPosition({
                top: rect.bottom - gridRect.top + 8,
                left: rect.left - gridRect.left,
                width: rect.width,
            });
        } else {
            setHoverPosition(null);
        }
    }, [hovered, activeTab]);

    return (
        <section className="w-full py-[40px] bg-white relative">
            <div className="max-w-6xl mx-auto px-4 text-center relative">
                <h2 className="text-4xl font-bold mb-10">Meet Our Advisory Board</h2>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16 flex items-center justify-center text-center">
                    <TabsList className="bg-white  rounded-full px-2 py-2 flex h-11 shadow-lg">
                        <TabsTrigger
                            value="board"
                            className={`rounded-full px-5 py-1 text-sm font-semibold transition-colors duration-300 ${activeTab === "board" ? "bg-white text-black" : "text-gray-300 "
                                }`}
                        >
                            Board Members
                        </TabsTrigger>

                        <TabsTrigger
                            value="youth"
                            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 ${activeTab === "youth" ? "bg-white text-black" : "text-gray-300 "
                                }`}
                        >
                            Youth Advisory
                        </TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className={`relative ${hovered && isLastRow ? 'pb-80' : 'pb-0'} transition-all duration-300`}>
                    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative">
                        {members.map((member, index) => {
                            const isHovered = hovered === member.id;
                            const isBlurred = hovered !== null && hovered !== member.id && index !== descriptionIndex;

                            if (index === descriptionIndex && hoveredIndex !== -1 && !isLastRow) {
                                const hoveredMember = members[hoveredIndex];
                                return (
                                    <motion.div
                                        key={`desc-${hoveredMember.id}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-gray-50 rounded-2xl p-6 text-left"
                                    >
                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">{hoveredMember.description}</p>
                                    </motion.div>
                                );
                            }

                            return (
                                <motion.div
                                    key={member.id}
                                    data-id={member.id}
                                    onMouseEnter={() => setHovered(member.id)}
                                    onMouseLeave={() => setHovered(null)}
                                    className={`relative cursor-pointer rounded-2xl overflow-hidden bg-white transition-all duration-300 ${isBlurred ? "blur-[1px] opacity-80" : ""
                                        }`}
                                >
                                    <Image
                                        src={isHovered ? member.hoverImage : member.image}
                                        alt={member.name}
                                        width={236}
                                        height={270}
                                        className="object-cover transition-all duration-500 rounded-2xl"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-semibold text-lg">{member.name}</h3>
                                        <p className="text-gray-500 text-sm">{member.role}</p>
                                    </div>
                                </motion.div>
                            );
                        })}


                        <AnimatePresence>
                            {hovered && isLastRow && hoverPosition && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute bg-gray-50 rounded-2xl p-6 shadow-inner text-left z-10"
                                    style={{
                                        top: hoverPosition.top,
                                        left: hoverPosition.left,
                                        width: hoverPosition.width,
                                        minHeight: '200px',
                                    }}
                                >
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        {members[hoveredIndex]?.description}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>




                    </div>
                </div>
                {members === boardMembers ? <>
                    <h2 className="text-4xl font-bold mt-20 mb-[42px]">Meet Our Teams</h2>
                    <div className={`relative ${hovered && isLastRow ? 'pb-80' : 'pb-0'} transition-all duration-300`}>
                        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative">
                            {members.map((member, index) => {
                                const isHovered = hovered === member.id;
                                const isBlurred = hovered !== null && hovered !== member.id && index !== descriptionIndex;

                                if (index === descriptionIndex && hoveredIndex !== -1 && !isLastRow) {
                                    const hoveredMember = members[hoveredIndex];
                                    return (
                                        <motion.div
                                            key={`desc-${hoveredMember.id}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-gray-50 rounded-2xl p-6 text-left"
                                        >
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">{hoveredMember.description}</p>
                                        </motion.div>
                                    );
                                }

                                return (
                                    <motion.div
                                        key={member.id}
                                        data-id={member.id}
                                        onMouseEnter={() => setHovered(member.id)}
                                        onMouseLeave={() => setHovered(null)}
                                        className={`relative cursor-pointer rounded-2xl overflow-hidden bg-white transition-all duration-300 ${isBlurred ? "blur-[1px] opacity-80" : ""
                                            }`}
                                    >
                                        <Image
                                            src={isHovered ? member.hoverImage : member.image}
                                            alt={member.name}
                                            width={236}
                                            height={270}
                                            className="object-cover transition-all duration-500 rounded-2xl"
                                        />
                                        <div className="p-4">
                                            <h3 className="font-semibold text-lg">{member.name}</h3>
                                            <p className="text-gray-500 text-sm">{member.role}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}


                            <AnimatePresence>
                                {hovered && isLastRow && hoverPosition && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute bg-gray-50 rounded-2xl p-6 shadow-inner text-left z-10"
                                        style={{
                                            top: hoverPosition.top,
                                            left: hoverPosition.left,
                                            width: hoverPosition.width,
                                            minHeight: '200px',
                                        }}
                                    >
                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                            {members[hoveredIndex]?.description}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                    </div>
                </> : <></>}
            </div>
        </section>
    );
}