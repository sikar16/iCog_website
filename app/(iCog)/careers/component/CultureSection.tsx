"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CultureSection() {
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay: i * 0.3 },
        }),
    };

    return (
        <section className="w-full bg-white py-20 md:py-28 px-6 sm:px-10 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-stretch justify-evenly gap-6">
                    <div className="flex flex-1 flex-col justify-between my-auto">
                        <motion.div
                            className="md:w-[458px] lg:w-[480px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants}
                        >
                            <h2 className="text-xl md:text-[36px] font-bold text-gray-900 mb-[16px]">
                                Nurturing Talent, Growing Together
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We take pride in supporting young talent — giving interns not just tasks,
                                but opportunities to grow, experiment, and contribute meaningfully. Our team
                                culture is built on empathy and shared purpose, and that energy shows in the way we work,
                                celebrate, and grow together.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mt-[73px] md:w-[458px] lg:w-[480px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants}
                        >
                            <h2 className="text-xl md:text-[36px] font-bold text-gray-900 mb-[16px]">
                                Culture That Connects
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                From bi-monthly team engagement days and birthday moments to our annual
                                retreats, we believe in connection just as much as innovation. Our values —
                                including youth focus, local engagement, and measurable impact — shape everything we do.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex flex-1 flex-col justify-center items-center gap-6 relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-md z-30"
                            custom={0}
                            variants={imageVariants}
                        >
                            <Image
                                src="/assets/2025-09-24 05.52.00.jpg"
                                alt="Team working together"
                                width={373}
                                height={250}
                                className="w-[373px] h-[250px] object-cover"
                            />
                        </motion.div>

                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-md mt-0 md:-mt-10 ml-[30px] lg:ml-[254px] z-20"
                            custom={1}
                            variants={imageVariants}
                        >
                            <Image
                                src="/assets/2025-09-24 05.50.42.jpg"
                                alt="Team celebrating"
                                width={350}
                                height={255}
                                className="w-[350px] h-[255px] object-cover"
                            />
                        </motion.div>

                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-md mt-0 md:-mt-10 ml-[10px] lg:ml-[70px] z-10"
                            custom={2}
                            variants={imageVariants}
                        >
                            <Image
                                src="/assets/2025-09-24 05.51.44.jpg"
                                alt="Outdoor team activity"
                                width={330}
                                height={250}
                                className="w-[330px] h-[250px] object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
