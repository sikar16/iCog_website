// "use client";
// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { useRef } from "react";

// type Item = {
//     id: number;
//     title: string;
//     description: string;
//     image: string;
// };

// export default function ConsultancyBook({ items }: { items: Item[] }) {
//     const containerRef = useRef<HTMLDivElement>(null);

//     // Make the container tall enough to allow scroll between cards
//     return (
//         <section ref={containerRef} className="relative bg-white text-black h-[500vh]">
//             {/* Sticky container */}
//             <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//                 {items.map((item, index) => {
//                     const total = items.length;
//                     const start = index / total;
//                     const end = (index + 1) / total;

//                     const { scrollYProgress } = useScroll({
//                         target: containerRef,
//                         offset: ["start start", "end end"],
//                     });

//                     // Each card fades in and covers the previous one
//                     const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
//                     const y = useTransform(scrollYProgress, [start, end], ["0%", "-10%"]);
//                     const scale = useTransform(scrollYProgress, [start, end], [1, 0.98]);

//                     const isEven = index % 2 === 0;

//                     return (
//                         <motion.div
//                             key={item.id}
//                             style={{ opacity, y, scale }}
//                             className="absolute inset-0 flex items-center justify-center"
//                         >
//                             <div
//                                 className={`flex flex-col-reverse md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"
//                                     } items-center justify-between gap-10 max-w-6xl w-full bg-white rounded-2xl shadow-xl p-10`}
//                             >
//                                 {/* Text */}
//                                 <div className="md:w-[500px] text-center md:text-left space-y-4">
//                                     <h3 className="text-3xl md:text-4xl font-bold">{item.title}</h3>
//                                     <p className="text-gray-600 leading-relaxed">{item.description}</p>
//                                     <button className="inline-flex items-center gap-2 px-6 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition-all">
//                                         Read more <span className="text-sm">↗</span>
//                                     </button>
//                                 </div>

//                                 {/* Image */}
//                                 <div className="relative w-full md:w-[480px] h-[320px] rounded-xl overflow-hidden shadow-lg">
//                                     <Image
//                                         src={item.image}
//                                         alt={item.title}
//                                         fill
//                                         className="object-cover rounded-xl"
//                                     />
//                                     <div className="absolute inset-0 bg-black/10"></div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// }
