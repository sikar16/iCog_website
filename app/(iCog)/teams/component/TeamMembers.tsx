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

// Helper function to split members into rows
const splitIntoRows = (members: Member[], columns: number) => {
    const rows = [];
    for (let i = 0; i < members.length; i += columns) {
        rows.push(members.slice(i, i + columns));
    }
    return rows;
};

export default function TeamMembers() {
    const [activeTab, setActiveTab] = useState("board");
    const [hovered, setHovered] = useState<number | null>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const tabRef = useRef<HTMLDivElement>(null);
    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
    const tabInView = useInView(tabRef, { once: false, amount: 0.4 });

    const columns = 4;
    const members = activeTab === "board" ? boardMembers : youthAdvisory;
    const rows = splitIntoRows(members, columns);

    const [hoverPosition, setHoverPosition] = useState<{ top: number; left: number; width: number } | null>(null);
    const hoveredIndex = members.findIndex((m) => m.id === hovered);
    const descriptionIndex = hoveredIndex !== -1 ? hoveredIndex + columns : null;
    const isLastRow = hoveredIndex !== -1 && hoveredIndex + columns >= members.length;

    // Track visibility for each row
    const [visibleRows, setVisibleRows] = useState<boolean[]>([]);

    // Set up intersection observers for each row
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        rowRefs.current.forEach((row, index) => {
            if (!row) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleRows(prev => {
                            const newVisible = [...prev];
                            newVisible[index] = true;
                            return newVisible;
                        });
                    }
                },
                { threshold: 0, rootMargin: "0px 0px -50px 0px" }
            );

            observer.observe(row);
            observers.push(observer);
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [rows.length]);

    // Reset visible rows when tab changes
    useEffect(() => {
        setVisibleRows(new Array(rows.length).fill(false));
    }, [activeTab, rows.length]);

    const fadeUpVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0, duration: 0, ease: "easeOut" },
        }),
    };

    const rowVariant = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0,
                staggerChildren: 0
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
        <section className="w-full py-[140px] bg-white relative">
            <div className="max-w-6xl mx-auto px-4 text-center relative">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-10"
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
                    className="flex justify-center mb-16"
                >
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="bg-white shadow-lg rounded-full px-1 py-1 flex h-12">
                            <TabsTrigger
                                value="board"
                                className={`rounded-full px-8 py-2 text-sm font-medium transition-all duration-300 ${activeTab === "board"
                                    ? "bg-black data-[state=active]:bg-black data-[state=active]:text-white text-gray-900 shadow-sm" : "bg-transparent text-gray-[#626161] hover:text-gray-[#626161] font-normal "
                                    }`}
                            >
                                Board Members
                            </TabsTrigger>
                            <TabsTrigger
                                value="youth"
                                className={`rounded-full px-8 py-2 text-sm font-medium transition-all duration-300 ${activeTab === "youth"
                                    ? "bg-black data-[state=active]:bg-black data-[state=active]:text-white text-gray-900 shadow-sm" : "bg-transparent text-gray-[#626161] hover:text-gray-[#626161] font-normal "
                                    }`}
                            >
                                Youth Advisory
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </motion.div>




                <div className="space-y-8">
                    {rows.map((row, rowIndex) => (
                        <motion.div
                            key={`teams-row-${rowIndex}`}
                            variants={rowVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                        >
                            {row.map((member) => (
                                <motion.div
                                    key={member.id}
                                    variants={itemVariant}
                                    className="relative cursor-pointer rounded-2xl overflow-hidden bg-white"
                                >
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={236}
                                        height={270}
                                        className="object-cover rounded-2xl"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-semibold text-lg">{member.name}</h3>
                                        <p className="text-gray-500 text-sm">{member.role}</p>
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
                            className="text-4xl font-bold mt-20 mb-[42px]"
                        >
                            Meet Our Teams
                        </motion.h2>

                        <div className={`relative ${hovered && isLastRow ? 'pb-80' : 'pb-0'} transition-all duration-300`}>
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
                                                variants={rowVariant}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.3 }}
                                                // className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
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
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}