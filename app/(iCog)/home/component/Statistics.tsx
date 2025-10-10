"use client"
import Image from "next/image"
import { motion } from "framer-motion";

export default function Statistics() {
    const slideFromLeft = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
    };
    return (
        <section className="w-full py-8 md:py-[94px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 max-w-6xl mx-auto gap-8 lg:gap-0">
                <div className="lg:col-span-9 max-w-full lg:max-w-[630px] mx-auto lg:mx-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-0">
                        <motion.div
                            variants={slideFromLeft}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.3, delay: 0 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="sm:col-span-1 lg:col-span-6 lg:mt-[14px] rounded-2xl overflow-hidden shadow-lg w-full max-w-[299px] mx-auto lg:mx-0 lg:w-[299px] h-[200px] sm:h-[250px] lg:h-[277px]">
                            <Image
                                src="/assets/statistics1.jpg"
                                alt="Conference room training session"
                                width={299}
                                height={277}
                                className="object-cover w-full h-full"
                            />
                        </motion.div>

                        <motion.div
                            variants={slideFromLeft}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.3, delay: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="sm:col-span-1 lg:col-span-6 lg:mt-[-17px] lg:mb-4 rounded-2xl overflow-hidden shadow-lg w-full max-w-[299px] mx-auto lg:mx-0 lg:w-[299px] h-[200px] sm:h-[250px] lg:h-[277px]">
                            <Image
                                src="/assets/statistics2.jpg"
                                alt="Certificate presentation ceremony"
                                width={299}
                                height={277}
                                className="object-cover w-full h-full"
                            />
                        </motion.div>

                        {/* Bottom row images */}
                        <motion.div
                            variants={slideFromLeft}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.3, delay: 0.25 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="sm:col-span-1 lg:col-span-7 rounded-2xl overflow-hidden shadow-lg w-full max-w-[339px] mx-auto lg:mx-0 lg:w-[339px] h-[200px] sm:h-[220px] lg:h-[243px] lg:mt-3">
                            <Image
                                src="/assets/statistics3.jpg"
                                alt="Meeting room with presentation setup"
                                width={339}
                                height={243}
                                className="object-cover w-full h-full"
                            />
                        </motion.div>

                        <motion.div
                            variants={slideFromLeft}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.3, delay: 1.0 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="sm:col-span-1 lg:relative lg:top-[-17px] lg:translate-x-[-5%] rounded-2xl overflow-hidden shadow-lg w-full max-w-[333px] mx-auto lg:mx-0 lg:w-[333px] h-[200px] sm:h-[220px] lg:h-[290px]">
                            <Image
                                src="/assets/statistics4.jpg"
                                alt="Computer lab with training equipment"
                                width={333}
                                height={290}
                                className="object-cover w-full h-full"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Statistics - Center on mobile, original on desktop */}
                <div className="lg:col-span-3 w-full lg:w-[497px] mx-auto lg:mx-0">
                    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 text-center lg:text-left">
                        <div>
                            <p className="text-5xl sm:text-6xl lg:text-[64px] font-bold">9</p>
                            <p className="text-[#626161] text-sm sm:text-base lg:text-[14px] mt-2 lg:mt-[0px]">Years Of Experience</p>
                        </div>
                        <div>
                            <p className="text-5xl sm:text-6xl lg:text-[60px] font-bold">24+</p>
                            <p className="text-[#626161] text-sm sm:text-base lg:text-[14px] mt-2 lg:mt-[0px]">Cities</p>
                        </div>
                        <div>
                            <p className="text-5xl sm:text-6xl lg:text-[64px] font-bold">118K+</p>
                            <p className="text-[#626161] text-sm sm:text-base lg:text-[14px] mt-2 lg:mt-[0px]">impacted kids and young adults</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}