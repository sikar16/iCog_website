"use client";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
    const [current, setCurrent] = React.useState(0);

    const images = [
        "/assets/photo_2025-06-17_16-17-25.jpg",
        "/assets/photo_2025-06-17_16-18-31.jpg",
        "/assets/photo_2025-06-26_11-38-28.jpg",
        "/assets/photo_2025-06-26_11-38-33.jpg",
        "/assets/photo_2025-06-26_11-38-36.jpg",
        "/assets/photo_2025-06-26_15-26-03.jpg",
        "/assets/photo_2025-06-17_16-17-25.jpg",
        "/assets/photo_2025-06-26_11-38-36.jpg",
        "/assets/photo_2025-06-26_15-26-03.jpg",
    ];

    const total = images.length;
    const width = 200; // width of each card
    const T = width

    return (
        <>
            <div className="px-[90px] flex flex-col gap-8 mb-16 mt-40 text-center">
                <p className="text-6xl font-bold">What It Means to Work at iCog</p>
                <p className="max-w-2xl mx-auto text-[#818181] text-lg leading-relaxed">
                    Working at iCog means being part of a team that&apos;s curious, creative, and committed
                    to making a real difference. Whether you join as an intern or a full-time team member,
                    you&apos;re welcomed into an environment that values{" "}
                    <strong>learning</strong>, <strong>teamwork</strong>, and{" "}
                    <strong>technology for positive change</strong>.
                </p>
            </div>

            {/* Carousel */}
            <div className="relative mx-auto max-w-7xl perspective-[2000px] overflow-visible ">
                {/* Viewport */}
                <div
                    className="viewport relative w-[800px] h-[450px] mx-auto transition-transform duration-700 ease-out "
                    style={{
                        transform: `translateZ(${-300}px) rotateY(${(360 / total)}deg) `,
                        transformStyle: "preserve-3d",
                    }}
                >
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="absolute w-[900px] h-[450px] rounded-2xl overflow-hidden "
                            style={{
                                transform: `rotateY(${(360 / total) * index}deg) translateZ(${-300}px)`,
                                backfaceVisibility: "hidden",
                            }}
                        >
                            <Card className="w-full h-full border-none bg-transparent">
                                <CardContent className="p-0 w-full h-full">
                                    <Image
                                        src={src}
                                        alt={`iCog team ${index + 1}`}
                                        width={300}
                                        height={450}
                                        className="object-cover w-full h-full"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-3 "
                    onClick={() => setCurrent((prev) => (prev - 1 + total) % total)}
                >
                    ◀
                </button>
                <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-3 "
                    onClick={() => setCurrent((prev) => (prev + 1) % total)}
                >
                    ▶
                </button>
            </div>
        </>
    );
}


// "use client";
// import * as React from "react";
// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Hero() {
//     const [current, setCurrent] = React.useState(0);

//     const images = [
//         "/assets/photo_2025-06-17_16-17-25.jpg",
//         "/assets/photo_2025-06-17_16-18-31.jpg",
//         "/assets/photo_2025-06-26_11-38-28.jpg",
//         "/assets/photo_2025-06-26_11-38-33.jpg",
//         "/assets/photo_2025-06-26_11-38-36.jpg",
//         "/assets/photo_2025-06-26_15-26-03.jpg",
//         "/assets/photo_2025-06-17_16-17-25.jpg",
//         "/assets/photo_2025-06-26_11-38-36.jpg",
//         "/assets/photo_2025-06-26_15-26-03.jpg",
//     ];

//     const total = images.length;

//     React.useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrent((prev) => (prev + 1) % total);
//         }, 3000);
//         return () => clearInterval(interval);
//     }, [total]);

//     return (
//         <>
//             <div className="px-[90px] flex flex-col  mb-16 mt-40 text-center">
//                 <p className="text-[52px] font-bold mb-[17px]">What It Means to Work at iCog</p>
//                 <p className="max-w-2xl mx-auto text-[#818181] text-[15px] leading-relaxed">
//                     Working at iCog means being part of a team that&apos;s curious, creative, and committed
//                     to making a real difference. Whether you join as an intern or a full-time team member,
//                     you&apos;re welcomed into an environment that values{" "}
//                     <strong>learning</strong>, <strong>teamwork</strong>, and{" "}
//                     <strong>technology for positive change</strong>.
//                 </p>
//             </div>

//             {/* Carousel */}
//             <div className="relative mx-auto w-full max-w-7xl h-[500px] perspective-[1200px] overflow-visible">
//                 {/* Viewport */}
//                 <div
//                     className="relative w-full h-full transition-transform duration-1000 ease-out"
//                     style={{
//                         transformStyle: "preserve-3d",

//                     }}
//                 >
//                     {images.map((src, index) => {
//                         const angle = (index * 360) / total;
//                         const radius = 500; // Adjust this value to change the circle size

//                         return (
//                             <div
//                                 key={index}
//                                 className="absolute top-1/2 left-1/2 w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-2xl"
//                                 style={{
//                                     transform: `
//                                         translate(-50%, -50%)
//                                         rotateY(${angle}deg)
//                                         translateZ(${radius}px)
//                                         rotateY(${-angle}deg)
//                                     `,
//                                     transformStyle: "preserve-3d",
//                                     transition: "transform 0.5s ease",
//                                 }}
//                             >
//                                 <Card className="w-full h-full border-none bg-transparent">
//                                     <CardContent className="p-0 w-full h-full">
//                                         <Image
//                                             src={src}
//                                             alt={`iCog team ${index + 1}`}
//                                             width={300}
//                                             height={400}
//                                             className="object-cover w-full h-full"
//                                             priority={index === 0}
//                                         />
//                                     </CardContent>
//                                 </Card>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </>
//     );
// }