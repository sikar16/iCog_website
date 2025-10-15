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

    // Animation variants
    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const cardsVariant = (delay = 0) => ({
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
    });

    return (
        <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-8 md:px-20">
            <div className="max-w-7xl mx-auto text-center">
                {/* Title */}
                <motion.h1
                    className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-10 md:mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={textVariant}
                >
                    Join Our Team <br className="hidden sm:block" /> Let’s Work Together
                </motion.h1>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-10">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            className="p-6 sm:p-7 border border-gray-100 rounded-3xl shadow hover:shadow-xl hover:bg-[#F8F8F8] transition-all text-left w-full max-w-md sm:max-w-none mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardsVariant(index * 0.2)}
                        >
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                                {job.title}
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                {job.location} |{" "}
                                <span className="text-green-600 font-medium">
                                    {job.type}
                                </span>
                            </p>
                            <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
                                {job.description}
                            </p>
                            <button className="px-4 py-2 mt-5 text-sm sm:text-base text-white bg-black rounded-[0px_12px_0px_12px] hover:bg-gray-800 transition-colors">
                                Apply Job ↗
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
