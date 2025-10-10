"use client";

import { motion } from "framer-motion";

export default function JoinOurTeam() {
    const jobs = [
        {
            title: "Human Resource Specialist",
            location: "Addis Ababa, Ethiopia",
            type: "Full Time",
            description:
                "An open-source platform crowdsourcing language data for Ethiopian languages to improve AI and NLP tools. Leyu builds ethical, community-driven datasets in low-resource languages like Amharic and Oromo.",
        },
        {
            title: "Human Resource Specialist",
            location: "Addis Ababa, Ethiopia",
            type: "Full Time",
            description:
                "An open-source platform crowdsourcing language data for Ethiopian languages to improve AI and NLP tools. Leyu builds ethical, community-driven datasets in low-resource languages like Amharic and Oromo.",
        },
        {
            title: "Human Resource Specialist",
            location: "Addis Ababa, Ethiopia",
            type: "Full Time",
            description:
                "An open-source platform crowdsourcing language data for Ethiopian languages to improve AI and NLP tools. Leyu builds ethical, community-driven datasets in low-resource languages like Amharic and Oromo.",
        },
        {
            title: "Human Resource Specialist",
            location: "Addis Ababa, Ethiopia",
            type: "Full Time",
            description:
                "An open-source platform crowdsourcing language data for Ethiopian languages to improve AI and NLP tools. Leyu builds ethical, community-driven datasets in low-resource languages like Amharic and Oromo.",
        },
    ];

    // Motion variants
    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const cardsVariant = (delay = 0) => ({
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
    });

    return (
        <section className="w-full bg-white py-20 px-6 sm:px-10 md:px-24">
            <div className="max-w-7xl mx-auto text-center">
                {/* Title */}
                <motion.h1
                    className="text-3xl md:text-5xl font-bold text-gray-900 mb-[67px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={textVariant}
                >
                    Join Our Team <br /> Let’s Work Together
                </motion.h1>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-[90px] gap-y-[36px] mx-auto ps-[22px] pt-[28px]">

                    {/* Top two cards (appear together) */}
                    {jobs.slice(0, 2).map((job, index) => (
                        <motion.div
                            key={index}
                            className="p-7 border border-gray-100 rounded-3xl shadow hover:shadow-xl hover:bg-[#F8F8F8] transition-shadow text-left w-[560px] mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={cardsVariant(0.3)} // Delay after title
                        >
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                {job.title}
                            </h2>
                            <p className="text-sm text-gray-500 mt-[9px]">
                                {job.location} |{" "}
                                <span className="text-green-600 font-medium">
                                    {job.type}
                                </span>
                            </p>
                            <p className="text-gray-600 mt-[20px]">
                                {job.description}
                            </p>
                            <button className="px-4 py-2 mt-[18px] text-white bg-black rounded-[0px_12px_0px_12px] hover:bg-gray-800">
                                Apply Job ↗
                            </button>
                        </motion.div>
                    ))}

                    {/* Bottom two cards (appear together after top two) */}
                    {jobs.slice(2).map((job, index) => (
                        <motion.div
                            key={index + 2}
                            className="p-7 border border-gray-100 rounded-3xl shadow hover:shadow-xl hover:bg-[#F8F8F8] transition-shadow text-left w-[560px] mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={cardsVariant(0.6)} // Delay after top cards
                        >
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                {job.title}
                            </h2>
                            <p className="text-sm text-gray-500 mt-[9px]">
                                {job.location} |{" "}
                                <span className="text-green-600 font-medium">
                                    {job.type}
                                </span>
                            </p>
                            <p className="text-gray-600 mt-[20px]">
                                {job.description}
                            </p>
                            <button className="px-4 py-2 mt-[18px] text-white bg-black rounded-[0px_12px_0px_12px] hover:bg-gray-800">
                                Apply Job ↗
                            </button>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
