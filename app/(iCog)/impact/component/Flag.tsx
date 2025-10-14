import Image from "next/image";
import React from "react";

export default function Flag() {
    return (
        <div className="min-h-[600px] py-10 px-6 md:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-gray-50 rounded-[40px] p-8 lg:p-14">

                {/* Text Section */}
                <div className="bg-gray-100 w-full lg:w-[420px] p-6 md:p-8 rounded-2xl text-center lg:text-left">
                    <p className="font-bold text-lg md:text-xl mb-2">National Footprint</p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        We believe access to opportunity shouldn’t depend on geography. That’s why our journey has taken us to
                        <span className="font-bold"> 25+ cities</span>, bringing learning, tools, and possibilities closer to home.
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-[500px] h-[280px] md:h-[400px] lg:h-[500px] relative">
                    <Image
                        src="/assets/1443e605344658bef39cd74b5af82761ebe8f992.png"
                        alt="iCog workspace"
                        fill
                        className="object-cover rounded-2xl"
                    />
                </div>
            </div>
        </div>
    );
}
