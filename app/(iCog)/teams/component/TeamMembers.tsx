"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Member {
    id: number;
    name: string;
    role: string;
    image: string;
    hoverImage?: string;
    description?: string;
}

const boardMembers: Member[] = [
    {
        id: 1,
        name: "Hasset Allene",
        role: "Marketing Assistant",
        image: "/assets/Teams/Hasset Allene  .JPG",
    },
    {
        id: 2,
        name: "Melat Kassaye",
        role: "Junior UI/UX Designer",
        image: "/assets/Teams/Melat Kassaye.jpg",
    },
    {
        id: 3,
        name: "Betelhem Dereselign",
        role: "Business Analyst",
        image: "/assets/Teams/Betelhem  dereselign2.jpg",
    },
    {
        id: 4,
        name: "Minassie Ephrem",
        role: "Graduate Trainee",
        image: "/assets/Teams/Minassie Ephrem.jpg",
    },
    {
        id: 5,
        name: "Tinbite Solomon",
        role: "Program Officer",
        image: "/assets/Teams/Tinbite Solomon 2.jpg",
    },
    {
        id: 6,
        name: "Eleni Kifle",
        role: "Project Manager",
        image: "/assets/Teams/Eleni Kifle.JPG",
    },
    {
        id: 7,
        name: "Paulos Birhanu",
        role: "Product Partnership Lead ",
        image: "/assets/Teams/Paulos Birhanu.jpg",
    },
    {
        id: 8,
        name: "Hana Wubtaye ",
        role: "Training Lead",
        image: "/assets/Teams/Hana Wubtaye 2.jpg",
    },
];

const meetTeams: Member[] = [
    {
        id: 1,
        name: "Betelhem Dessie Asnake",
        role: "CEO",
        image: "/assets/Teams/Betelhem Dessie .jpg",
        hoverImage: "/assets/Teams Fun Photo/Betelhem Dessie.jpg",
        description: "An Ethiopian technology education entrepreneur, is a leading figure in her country's emerging tech scene, recognized internationally for her transformative work in providing access to technology education and AI",
    },
    {
        id: 2,
        name: "Getnet Assefa",
        role: "N/A",
        image: "/assets/Teams/Getnet Assefa.jpg",
        hoverImage: "/assets/Teams Fun Photo/Getnet.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 3,
        name: "Paulos Birhanu Haile",
        role: "Product Partnership Lead",
        image: "/assets/Teams/Paulos Birhanu.jpg",
        hoverImage: "/assets/Teams Fun Photo/Paulos.jpg",
        description: "I lead tech-driven initiatives that connect innovation with real-world impact. With a background in project management, I focus on sustainability, equity, and long-term value. Music fuels my creativity, helping me find flow in both strategy and execution.",
    },
    {
        id: 4,
        name: "Lydia Yoseph Kifle",
        role: "Program Officer",
        image: "/assets/Teams/Lydia Yoseph Kifle.jpg",
        hoverImage: "/assets/Teams Fun Photo/Lidya.jpg",
        description: "As a Program Officer, I find joy in contributing to projects that make a real difference. Outside work, I’m into books, puzzles, new experiences—and I’m almost always laughing at something! ",
    },
    {
        id: 5,
        name: "Etsesabek Taye Habtegebriel",
        role: "Operations Lead",
        image: "/assets/Teams/Etsesabek Taye Habtegebriel.jpg",
        hoverImage: "/assets/Teams Fun Photo/Etsesabek Taye.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 6,
        name: "Endryas Ayalew Hailu",
        role: "Finance & Compliance Lead",
        image: "/assets/Teams/Endryas Ayalew  .jpg",
        hoverImage: "/assets/Teams Fun Photo/Endryas.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 7,
        name: "Emebet Yilma Badi",
        role: "N/A",
        image: "/assets/Teams/Emebet Yilma.jpg",
        hoverImage: "/assets/Teams Fun Photo/Emebet.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 8,
        name: "Betelhem Girma Mengistu",
        role: "Technical Product Manager",
        image: "/assets/Teams/Betelhem Girma Mengistu.jpg",
        hoverImage: "/assets/Teams Fun Photo/Betelhem Girma Mengistu.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 9,
        name: "Meaza Endale Merida",
        role: "Janitor",
        image: "/assets/Teams/Meaza Endale.JPG",
        hoverImage: "/assets/Teams Fun Photo/Meaza.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 10,
        name: "Samson Kassa Oyicha",
        role: "Front-End Developer",
        image: "/assets/Teams/Samson Kassa.jpg",
        hoverImage: "/assets/Teams Fun Photo/Samson.jpg",
        description: "Software Engineer | Creative Developer",
    },
    {
        id: 11,
        name: "Bruk Lemma Kahsay",
        role: "DevOps Engineer",
        image: "/assets/Teams/Bruk Lemma.HEIC",
        hoverImage: "/assets/Teams Fun Photo/Bruk.jpg",
        description: "Living in the cloud, speaking fluent YAML, and always shipping with style.",
    },
    {
        id: 12,
        name: "Bemnet Gashaw Enawgaw",
        role: "Training Operations Coordinator",
        image: "/assets/Teams/Bemnet Gashaw  .jpg",
        hoverImage: "/assets/Teams Fun Photo/Bemnet.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 13,
        name: "Rebecca Mekonen Habte giyorgis",
        role: "Operations Coordinator",
        image: "/assets/Teams/Rebecca Mekonen  .jpg",
        hoverImage: "/assets/Teams Fun Photo/Rebecca.jpg",
        description: "I’m focused on keeping things running smoothly, improving systems, and making our work more effective behind the scenes. I love the role because it gives me insight into how everything works and how we can always make it better. Outside of work, I enjoy spending time with family and friends, singing, and going on little adventures. I also have a curious habit of observing people and imagining the stories they carry—it’s a small thing that keeps everyday moments interesting.",
    },
    {
        id: 14,
        name: "Eleni Kifle Gebremariam",
        role: "Project Manager",
        image: "/assets/Teams/Eleni Kifle.JPG",
        hoverImage: "/assets/Teams Fun Photo/Eleni.jpg",
        description: "I’m a project manager by profession and an extrovert at heart—always up for a chat and thriving in fast-paced environments. Fueled by coffee, football (go Gunners!), and a bit of organized chaos, I balance my OCD habits with ADHD energy. Proud cat lover, multitasker, and the unofficial Google Maps of my friend group.",
    },
    {
        id: 15,
        name: "Helina Tigestu Melese",
        role: "Curriculum Officer",
        image: "/assets/Teams/Helina Tigestu.jpg",
        hoverImage: "/assets/Teams Fun Photo/Helina.jpg",
        description: "As a curriculum officer, I’m passionate about designing engaging learning experiences that make a real impact. I’m also deeply curious about medical science and, at heart, a dog person—nothing beats the joy they bring. ",
    },
    {
        id: 16,
        name: "Rediet Tesfaye Atire",
        role: "Operations Associate",
        image: "/assets/Teams/Rediet Tesfaye.HEIC",
        hoverImage: "/public/assets/Teams Fun Photo/Rediet Tesfaye.jpg",
        description: "I’m an Operations Associate focusing on partnerships and procurement, with a background in electrical and computer engineering. Outside of work, you’ll probably find me napping or doing some quality doom scrolling on social media.",
    },
    {
        id: 17,
        name: "Firehiwot Worku Alemu",
        role: "Marketing & PR Manager",
        image: "/assets/Teams/Firehiwot Worku .jpg",
        hoverImage: "/assets/Teams Fun Photo/Firehiwot Worku.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 18,
        name: "Helen Legesse Worku",
        role: "Messenger",
        image: "/assets/Teams/Helen Legesse.jpg",
        hoverImage: "/assets/Teams Fun Photo/Helen.jpg",
        description: "When I’m not working, you’ll probably find me helping my mom, vibing to music, or deep in my hair care routine — it’s all about balance!",
    },
    {
        id: 19,
        name: "Abrham Sisay Abate",
        role: "Tech Team Coordinator",
        image: "/assets/Teams/Abrham Sisay.HEIC",
        hoverImage: "/assets/Teams Fun Photo/Abrham.jpg",
        description: "I'm a full stack developer who loves turning ideas into fast, clean, and user-friendly apps. I work with Spring Boot, Next.js, and Flutter to build stuff that just works. When I’m not coding, you’ll probably find me scoring goals on the pitch, leveling up in video games, or cracking jokes with friends over coffee.",
    },
    {
        id: 20,
        name: "Rediet Begashaw Asfaw",
        role: "Product Operations Assistant",
        image: "/assets/Teams/Rediet Begashaw.JPG",
        hoverImage: "/assets/Teams Fun Photo/Rediet Begashaw.jpg",
        description: "When I’m not optimizing workflows or wrangling spreadsheets, you’ll find me lost in a sketchbook, buried in a novel, or eating my way through life as a socially adaptable introvert (with escape plans always ready).",
    },
    {
        id: 21,
        name: "Halleluya Dessalegn Gebremariam",
        role: "Operations Assistant",
        image: "/assets/Teams/Halleluya Dessalegn.jpg",
        hoverImage: "/assets/Teams Fun Photo/Halleluya.jpg",
        description: "I’m a fiction lover, a meme connoisseur, and fluent in dry humor. I’m super observant, a little awkward with compliments, but always up for a good story or a clever punchline.",
    },
    {
        id: 22,
        name: "Yabsera Tesfaye Hailegiorgis",
        role: "Product Operations Coordinator",
        image: "/assets/Teams/Yabsera Tesfaye.JPG",
        hoverImage: "/assets/Teams Fun Photo/Yabsera.jpg",
        description: "I steer product operations with precision, though my true expertise lies in project management. As a tall person, I’m used to seeing the big picture, while keeping a close eye on the details. I’m energetic and detail-oriented; I’m all about smoothing out the bumps and love turning chaos into order.",
    },
    {
        id: 23,
        name: "Eyerusalem Abebe",
        role: "Training Officer",
        image: "/assets/Teams/Eyerusalem Abebe.jpg",
        hoverImage: "/assets/Teams Fun Photo/Eyerusalem.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 24,
        name: "Liya Mekonnen",
        role: "Finance Admin",
        image: "/assets/Teams/Liya Mekonnen.jpg",
        hoverImage: "/assets/Teams Fun Photo/Liya.jpg",
        description: "I’m a finance administrator with a knack for keeping things organized and running smoothly. I enjoy solving problems, making sense of the numbers, and ensuring everything adds up behind the scenes. Outside of work, I’m passionate about good food and great conversations. ",
    },
    {
        id: 25,
        name: "Kalkidan Dejene Haile",
        role: "HR Officer",
        image: "/assets/Teams/Kalkidan Dejene.jpg",
        hoverImage: "/assets/Teams Fun Photo/Kalkidan.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 26,
        name: "Melat Kassaye Tadesse",
        role: "Junior UI/UX Designer",
        image: "/assets/Teams/Melat Kassaye.jpg",
        hoverImage: "/assets/Teams Fun Photo/Melat Kassaye.jpg",
        description: "I’m a curious, artsy soul who happens to love UI/UX design.Nothing makes me happier than bringing beauty and clarity to the screen. 💫"
    },
    {
        id: 27,
        name: "Abrham Belete",
        role: "Tech Lead",
        image: "/assets/Teams/Abrham Belete.JPG",
        hoverImage: "/assets/Teams Fun Photo/Abrham Belete.jpg",
        description: "I’m a computer engineer passionate about problem-solving, learning, and collaborating with great teams. I’m especially interested in machine learning and enjoy experimenting with deep learning projects.Outside tech, football is my art—I love the strategy, creativity, and rhythm of the game.",
    },
    {
        id: 28,
        name: "Melat Zegeye Hailemariam",
        role: "Program Manager",
        image: "/assets/Teams/Melat Zegeye.jpg",
        hoverImage: "/assets/Teams Fun Photo/Melat Zegeye.jpg",
        description: "With a background that spans health, marketing, and program management, I bring a unique blend of insight and adaptability to everything I do. Outside of work, you will usually find me in the kitchen experimenting with flavors, throwing punches in a boxing class, or relaxing with my favorite sidekick—my dog, Milo.",
    },
    {
        id: 29,
        name: "Betelhem Dereselegn",
        role: "Business Analyst",
        image: "/assets/Teams/Betelhem  Dereselign.jpg",
        hoverImage: "/assets/Teams Fun Photo/Betty Dereselign.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 30,
        name: "Hana Wubtaye Mekuria",
        role: "Training Lead",
        image: "/assets/Teams/Hana Wubtaye.JPG",
        hoverImage: "/assets/Teams Fun Photo/Hana.jpg",
        description: "Someone who finds balance through journaling, walks in nature, and moments of genuine connection. Whether exploring new cafés, trying flavors, or tuning into podcasts, I’m always seeking inspiration. For me, personal growth and professional purpose meet in the small, intentional choices of everyday life.",
    },
    {
        id: 31,
        name: "Tinbite Solomon",
        role: "Program Officer",
        image: "/assets/Teams/Tinbite Solomon.jpg",
        hoverImage: "/assets/Teams Fun Photo/Tenbit.jpg",
        description: "I'm a Program Officer experienced in managing diverse tech projects. My secret ingredients for success? My amazing family and, without a doubt, coffee! You'll know I'm having a rough morning if I'm frowning—it just means I need my coffee.",
    },
    {
        id: 32,
        name: "Kirubel Menberu",
        role: "Front-End Developer",
        image: "/assets/Teams/Kirubel Menberu.jpg",
        hoverImage: "/assets/Teams Fun Photo/Kirubel.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 33,
        name: "Wondimagegn Zewdu",
        role: "Full-Stack Developer",
        image: "/assets/Teams/Wondimagegn Zewudu .jpg",
        hoverImage: "/assets/Teams Fun Photo/Wondimagegn.jpg",
        description: "I’m a versatile Full Stack Developer passionate about turning ideas into robust, user-friendly solutions—from front-end to back-end. I love exploring new challenges, especially in VR and AI, and thrive on writing clean, efficient code that delivers real impact.",
    },
    {
        id: 34,
        name: "Maramawit Alemayehu Zewdu",
        role: "Finance & Compliance Officer",
        image: "/assets/Teams/Maramawit Alemayehu Zewdu.jpg",
        hoverImage: "/assets/Teams Fun Photo/Maramawit.jpg",
        description: "Finance and Compliance Officer with a passion for accuracy and efficiency",
    },
    {
        id: 35,
        name: "Firaol getachew",
        role: "Full-Stack Developer",
        image: "/assets/Teams/Fraol Getachew.jpg",
        hoverImage: "/assets/Teams Fun Photo/Fraol.jpg",
        description: "Part-time genius, full-time snack enthusiast. Breaking code and making coffee disappear since 2023. Probably Googling something right now.",
    },
    {
        id: 36,
        name: "Hasset Allene Mihrete",
        role: "Marketing Assistant",
        image: "/assets/Teams/Hasset Allene  .JPG",
        hoverImage: "/assets/Teams Fun Photo/Hasset.jpg",
        description: "A lover of good quotes, great books, and meaningful moments with family and friends. I enjoy a mix of hobbies like painting and crocheting (just for fun!), and I’m passionate about poetry and anything that speaks to the soul. Life, for me, is all about finding beauty in the little things and the power of words.",
    },
    {
        id: 37,
        name: "Minassie Ephrem Kere",
        role: "Graduate Trainee",
        image: "/assets/Teams/Minassie Ephrem.jpg",
        hoverImage: "/assets/Teams Fun Photo/Minassie Ephrem.jpg",
        description: "Love solving puzzles and finding the missing pieces — whether it’s in systems, ideas, or people’s stories. I think challenges fear me 😊Outside of work, you’ll likely find me reading at home, churching at church, or friending with friends.",
    },
    {
        id: 38,
        name: "Betelhem Murad",
        role: "QA Engineer",
        image: "/assets/Teams/Betelhem Murad.jpg",
        hoverImage: "/assets/Teams Fun Photo/Betty Murad.jpg",
        description: "I dive deep into every edge case, bug, and bottleneck to make sure what we build doesn’t just work, but works flawlessly. I don’t believe in “almost right” , because in quality, every detail counts.",
    },
    {
        id: 39,
        name: "Biruktawit Minwuyelet",
        role: "Call Center",
        image: "/assets/Teams/Biruktawit Minwuyelet.jpg",
        hoverImage: "/assets/Teams Fun Photo/Biruktawit.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 40,
        name: "Kemeriya Zeynu",
        role: "Junior Data Analyst",
        image: "/assets/Teams/Kemeriya Zeynu.JPG",
        hoverImage: "/assets/Teams Fun Photo/Kemeriya.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 41,
        name: "Mihiret Abebe Mengstu",
        role: "HR Officer",
        image: "/assets/Teams/Mihiret Abebe .JPG",
        hoverImage: "/assets/Teams Fun Photo/Mihiret.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 42,
        name: "Eyuel Mamushet Abebe",
        role: "Call Center",
        image: "/assets/Teams/Eyuel Mamushet.jpg",
        hoverImage: "/assets/Teams Fun Photo/Eyuel.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 43,
        name: "Tekleab Mulugeta Derseh",
        role: "Graphic Designer",
        image: "/assets/Teams/Tekleab Mulugeta.JPG",
        hoverImage: "/assets/Teams Fun Photo/Tekleab.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 44,
        name: "Iftu Tolesa",
        role: "Operations Assistant",
        image: "/assets/Teams/Iftu tola.JPG",
        hoverImage: "/assets/Teams Fun Photo/Iftu.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 45,
        name: "Firehiwot Kebede Gebrie",
        role: "Technical Trainer",
        image: "/assets/Teams/Firehiwot Kebede.JPG",
        hoverImage: "/assets/Teams Fun Photo/Firehiwot Worku.jpg",
        description: "Despite the “Fire” in my name, I’m calm and easygoing, but I light up when it comes to writing. I love using words to craft content that’s human, thoughtful, and real. For me, marketing is just storytelling with purpose. ",
    },
    {
        id: 46,
        name: "Bezawit Taye Afework",
        role: "Graduate Trainee - Operations",
        image: "/assets/Teams/Bezawit Taye.JPG",
        hoverImage: "/assets/Teams Fun Photo/Bezawit.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 47,
        name: "Samuel Mideksa Debela",
        role: "Junior Full-Stack Developer",
        image: "/assets/Teams/Samuel Mideksa.JPG",
        hoverImage: "/assets/Teams Fun Photo/Samuel.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 48,
        name: "Libamlak Birhanu Workalem",
        role: "Front-End Developer",
        image: "/assets/Teams/Libamlak Birhanu.JPG",
        hoverImage: "/assets/Teams Fun Photo/Libamlak.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
    {
        id: 49,
        name: "Betelhem Adugna Alebachew",
        role: "Curriculum Development Assistant",
        image: "/assets/Teams/Betelhem Adugna.JPG",
        hoverImage: "/assets/Teams Fun Photo/Betelhem Adugna.jpg",
        description: "Dedicated team member contributing to organizational success...",
    },
];

const youthAdvisory: Member[] = [
    {
        id: 1,
        name: "Yonatan Girma",
        role: "Youth Program Officer",
        image: "/assets/2025-09-24 05.50.33.jpg",
        hoverImage: "/team/yonatan2.jpg",
        description: "Yonatan is passionate about empowering youth through leadership initiatives...",
    },
    {
        id: 2,
        name: "Eden Mesfin",
        role: "Community Engagement Lead",
        image: "/assets/2025-09-24 05.50.33.jpg",
        hoverImage: "/team/eden2.jpg",
        description: "Eden connects young voices with meaningful community opportunities...",
    },
    {
        id: 3,
        name: "Daniel Bekele",
        role: "Creative Director",
        image: "/assets/2025-09-24 05.50.33.jpg",
        hoverImage: "/team/daniel2.jpg",
        description: "Daniel blends creativity and strategy to bring impactful campaigns to life...",
    },
    {
        id: 4,
        name: "Saron Tekle",
        role: "Youth Outreach Coordinator",
        image: "/assets/2025-09-24 05.50.33.jpg",
        hoverImage: "/team/saron2.jpg",
        description: "Saron builds bridges between young leaders and organizations...",
    },
    {
        id: 5,
        name: "Abel Mihret",
        role: "Research Analyst",
        image: "/assets/2025-09-24 05.50.33.jpg",
        hoverImage: "/team/abel2.jpg",
        description: "Abel explores data-driven insights to support youth-focused policies...",
    },
    {
        id: 6,
        name: "Meron Tadesse",
        role: "Social Media Strategist",
        image: "/assets/2025-09-24 05.50.33.jpg",
        hoverImage: "/team/meron2.jpg",
        description: "Meron crafts online campaigns that connect youth communities globally...",
    },
    {
        id: 7,
        name: "Dawit Alemu",
        role: "Tech Innovation Advisor",
        image: "/assets/2025-09-24 05.50.33.jpg",
        hoverImage: "/team/dawit2.jpg",
        description: "Dawit mentors young innovators building digital tools for social impact...",
    },
    {
        id: 8,
        name: "Hana Assefa",
        role: "Event Coordinator",
        image: "/assets/2025-09-24 05.50.33.jpg",
        hoverImage: "/team/hana2.jpg",
        description: "Hana orchestrates engaging youth events that inspire collaboration and creativity...",
    },
];

const splitIntoRows = (members: Member[], screenSize: string) => {
    let columns = 4;

    if (screenSize === 'mobile') columns = 2;
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

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
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
    // Index within the currently displayed top grid (board or youth)
    const hoveredIndex = members.findIndex((m) => m.id === hovered);
    // Index within the Meet Our Teams grid
    const hoveredIndexMeet = meetTeams.findIndex((m) => m.id === hovered);

    const getColumns = () => {
        switch (screenSize) {
            case 'mobile': return 2;
            case 'small-desktop': return 3;
            default: return 4;
        }
    };

    const columns = getColumns();
    const descriptionIndex = hoveredIndex !== -1 ? hoveredIndex + columns : null;
    // Indices for the Meet Our Teams grid
    const descriptionIndexMeet = hoveredIndexMeet !== -1 ? hoveredIndexMeet + columns : null;
    const isLastRowMeet = hoveredIndexMeet !== -1 && hoveredIndexMeet + columns >= meetTeams.length;

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
                        <TabsList className="bg-white shadow-xl  rounded-full px-1 py-1 flex h-10 sm:h-12">
                            <TabsTrigger
                                value="board"
                                className={`rounded-full px-4 sm:px-6 md:px-8 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === "board"
                                    ? "bg-black data-[state=active]:bg-black data-[state=active]:text-white text-gray-900 " : "bg-transparent text-gray-[#626161] hover:text-gray-[#626161] font-normal "
                                    }`}
                            >
                                Board Members
                            </TabsTrigger>
                            <TabsTrigger
                                value="youth"
                                className={`rounded-full px-4 sm:px-6 md:px-8 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === "youth"
                                    ? "bg-black data-[state=active]:bg-black data-[state=active]:text-white text-gray-900 " : "bg-transparent text-gray-[#626161] hover:text-gray-[#626161] font-normal "
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
                                    className="relative cursor-pointer rounded-xl  overflow-hidden bg-white   transition-all duration-300"
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    <div className="relative aspect-[3/4] w-full ">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-all duration-500 border-1 border-black/10 rounded-xl "
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

                        <div className={`relative ${hovered && isLastRowMeet ? 'pb-40 sm:pb-60 md:pb-80' : 'pb-0'} transition-all duration-300`}>
                            <div ref={gridRef} className={`grid grid-cols-2 ${screenSize === 'small-desktop' ? 'md:grid-cols-3' : ''} ${screenSize === 'desktop' ? 'lg:grid-cols-4' : ''} gap-4 sm:gap-6 md:gap-8 relative`}>
                                {meetTeams.map((member, index) => {
                                    const isHovered = hovered === member.id;
                                    const isBlurred = hovered !== null && hovered !== member.id && index !== descriptionIndexMeet;

                                    if (index === descriptionIndexMeet) {
                                        const hoveredMember = meetTeams[hoveredIndexMeet];
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
                                            className={`relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden bg-white  transition-all duration-300 ${isBlurred ? "blur-[1px] opacity-80" : ""
                                                }`}
                                        >
                                            <div className="relative aspect-[3/4] w-full">
                                                <Image
                                                    src={isHovered && member.hoverImage ? member.hoverImage : member.image}
                                                    alt={member.name}
                                                    fill

                                                    className="object-cover transition-all duration-500 border-1 border-black/10 rounded-xl "

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
                                    {hovered && hoverPosition && (
                                        <motion.div
                                            key={`desc-${hovered}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-inner text-left z-10  border-gray-200"
                                            style={{
                                                top: hoverPosition.top,
                                                left: hoverPosition.left,
                                                width: hoverPosition.width,
                                                minHeight: screenSize === 'mobile' ? '120px' : '150px',
                                            }}
                                        >
                                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                                {meetTeams.find(m => m.id === hovered)?.description || "No description available."}
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