"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
        image: "/assets",
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
        name: "Nahom Meles",
        role: "Project Coordinator",
        image: "/team/nahom1.jpg",
        hoverImage: "/team/nahom2.jpg",
        description: "Nahom ensures smooth project execution and cross-team collaboration...",
    },
    {
        id: 6,
        name: "Lidya Worku",
        role: "Graphic Designer",
        image: "/team/lidya1.jpg",
        hoverImage: "/team/lidya2.jpg",
        description: "Lidya is passionate about visual storytelling and brand identity design...",
    },
    {
        id: 7,
        name: "Samuel Tesfaye",
        role: "Frontend Developer",
        image: "/team/samuel1.jpg",
        hoverImage: "/team/samuel2.jpg",
        description: "Samuel focuses on building elegant, performant, and accessible interfaces...",
    },
    {
        id: 8,
        name: "Rahel Getachew",
        role: "Product Manager",
        image: "/team/rahel1.jpg",
        hoverImage: "/team/rahel2.jpg",
        description: "Rahel bridges design and development, ensuring user needs drive product strategy...",
    },
];

const youthAdvisory: Member[] = [
    {
        id: 1,
        name: "Yonatan Girma",
        role: "Youth Program Officer",
        image: "/team/yonatan1.jpg",
        hoverImage: "/team/yonatan2.jpg",
        description: "Yonatan is passionate about empowering youth through leadership initiatives...",
    },
    {
        id: 2,
        name: "Eden Mesfin",
        role: "Community Engagement Lead",
        image: "/team/eden1.jpg",
        hoverImage: "/team/eden2.jpg",
        description: "Eden connects young voices with meaningful community opportunities...",
    },
    {
        id: 3,
        name: "Daniel Bekele",
        role: "Creative Director",
        image: "/team/daniel1.jpg",
        hoverImage: "/team/daniel2.jpg",
        description: "Daniel blends creativity and strategy to bring impactful campaigns to life...",
    },
    {
        id: 4,
        name: "Saron Tekle",
        role: "Youth Outreach Coordinator",
        image: "/team/saron1.jpg",
        hoverImage: "/team/saron2.jpg",
        description: "Saron builds bridges between young leaders and organizations...",
    },
    {
        id: 5,
        name: "Abel Mihret",
        role: "Research Analyst",
        image: "/team/abel1.jpg",
        hoverImage: "/team/abel2.jpg",
        description: "Abel explores data-driven insights to support youth-focused policies...",
    },
    {
        id: 6,
        name: "Meron Tadesse",
        role: "Social Media Strategist",
        image: "/team/meron1.jpg",
        hoverImage: "/team/meron2.jpg",
        description: "Meron crafts online campaigns that connect youth communities globally...",
    },
    {
        id: 7,
        name: "Dawit Alemu",
        role: "Tech Innovation Advisor",
        image: "/team/dawit1.jpg",
        hoverImage: "/team/dawit2.jpg",
        description: "Dawit mentors young innovators building digital tools for social impact...",
    },
    {
        id: 8,
        name: "Hana Assefa",
        role: "Event Coordinator",
        image: "/team/hana1.jpg",
        hoverImage: "/team/hana2.jpg",
        description: "Hana orchestrates engaging youth events that inspire collaboration and creativity...",
    },
];

// Helper function to split members into rows based on screen size
const splitIntoRows = (members: Member[], screenSize: string) => {
    let columns = 4; // default for large screens

    if (screenSize === 'mobile') columns = 2; // Changed from 1 to 2
    else if (screenSize === 'tablet') columns = 2;
    else if (screenSize === 'small-desktop') columns = 3;

    const rows = [];
    for (let i = 0; i < members.length; i += columns) {
        rows.push(members.slice(i, i + columns));
    }
    return rows;
};

export default function TeamMembers() {
    const [activeTab, setActiveTab] = useState("board");
    const [hovered, setHovered] = useState<number | null>(null);
    const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'small-desktop' | 'desktop'>('desktop');
    const gridRef = useRef<HTMLDivElement>(null);
    const tabRef = useRef<HTMLDivElement>(null);
    const tabInView = useInView(tabRef, { once: false, amount: 0.4 });

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) { // Changed from 640 to 768 for mobile
                setScreenSize('mobile');
            } else if (width < 1024) {
                setScreenSize('small-desktop');
            } else {
                setScreenSize('desktop');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const members = activeTab === "board" ? boardMembers : youthAdvisory;
    const rows = splitIntoRows(members, screenSize);

    const [hoverPosition, setHoverPosition] = useState<{ top: number; left: number; width: number } | null>(null);
    const hoveredIndex = members.findIndex((m) => m.id === hovered);

    // Calculate columns based on screen size for description positioning
    const getColumns = () => {
        switch (screenSize) {
            case 'mobile': return 2; // Changed from 1 to 2
            case 'small-desktop': return 3;
            default: return 4;
        }
    };

    const columns = getColumns();
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
    }, [hovered, activeTab, screenSize]);

    const rowVariant = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-[140px] bg-white relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10"
                >
                    Meet Our Advisory Board
                </motion.h2>

                <motion.div
                    ref={tabRef}
                    animate={tabInView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0, y: 60 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                    className="flex justify-center mb-8 sm:mb-12 md:mb-16"
                >
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="bg-white shadow-lg rounded-full px-1 py-1 flex h-10 sm:h-12">
                            <TabsTrigger
                                value="board"
                                className={`rounded-full px-4 sm:px-6 md:px-8 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === "board"
                                    ? "bg-black data-[state=active]:bg-black data-[state=active]:text-white text-gray-900 shadow-sm" : "bg-transparent text-gray-[#626161] hover:text-gray-[#626161] font-normal "
                                    }`}
                            >
                                Board Members
                            </TabsTrigger>
                            <TabsTrigger
                                value="youth"
                                className={`rounded-full px-4 sm:px-6 md:px-8 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === "youth"
                                    ? "bg-black data-[state=active]:bg-black data-[state=active]:text-white text-gray-900 shadow-sm" : "bg-transparent text-gray-[#626161] hover:text-gray-[#626161] font-normal "
                                    }`}
                            >
                                Youth Advisory
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </motion.div>

                <div className="space-y-6 sm:space-y-8">
                    {rows.map((row, rowIndex) => (
                        <motion.div
                            key={`teams-row-${rowIndex}`}
                            variants={rowVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className={`grid grid-cols-2 ${screenSize === 'small-desktop' ? 'md:grid-cols-3' : ''} ${screenSize === 'desktop' ? 'lg:grid-cols-4' : ''} gap-4 sm:gap-6 md:gap-8`}
                        >
                            {row.map((member) => (
                                <motion.div
                                    key={member.id}
                                    variants={itemVariant}
                                    className="relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
                                    // onMouseEnter={() => setHovered(member.id)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    <div className="relative aspect-[3/4] w-full">
                                        <Image
                                            src={hovered === member.id ? member.hoverImage : member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-all duration-500"
                                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        />
                                    </div>
                                    <div className="p-3 sm:p-4">
                                        <h3 className="font-semibold text-base sm:text-lg leading-tight">{member.name}</h3>
                                        <p className="text-gray-500 text-xs sm:text-sm mt-1">{member.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ))}
                </div>

                {members === boardMembers && (
                    <>
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mt-12 sm:mt-16 md:mt-20 mb-6 sm:mb-8 md:mb-[42px]"
                        >
                            Meet Our Teams
                        </motion.h2>

                        <div className={`relative ${hovered && isLastRow ? 'pb-40 sm:pb-60 md:pb-80' : 'pb-0'} transition-all duration-300`}>
                            <div ref={gridRef} className={`grid grid-cols-2 ${screenSize === 'small-desktop' ? 'md:grid-cols-3' : ''} ${screenSize === 'desktop' ? 'lg:grid-cols-4' : ''} gap-4 sm:gap-6 md:gap-8 relative`}>
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
                                                className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-left"
                                            >
                                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{hoveredMember.description}</p>
                                            </motion.div>
                                        );
                                    }

                                    return (
                                        <motion.div
                                            key={member.id}
                                            data-id={member.id}
                                            onMouseEnter={() => setHovered(member.id)}
                                            onMouseLeave={() => setHovered(null)}
                                            className={`relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 ${isBlurred ? "blur-[1px] opacity-80" : ""
                                                }`}
                                        >
                                            <div className="relative aspect-[3/4] w-full">
                                                <Image
                                                    src={isHovered ? member.hoverImage : member.image}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover transition-all duration-500"
                                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                                />
                                            </div>
                                            <div className="p-3 sm:p-4">
                                                <h3 className="font-semibold text-base sm:text-lg leading-tight">{member.name}</h3>
                                                <p className="text-gray-500 text-xs sm:text-sm mt-1">{member.role}</p>
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
                                            className="absolute bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-inner text-left z-10"
                                            style={{
                                                top: hoverPosition.top,
                                                left: hoverPosition.left,
                                                width: hoverPosition.width,
                                                minHeight: screenSize === 'mobile' ? '150px' : '200px',
                                            }}
                                        >
                                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                                {members[hoveredIndex]?.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}