"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Partners() {
  const images = [
    '/assets/Asset 5.png',
    '/assets/Asset 15.png',
    '/assets/Asset 27.png',
    '/assets/Asset 24.png',
    '/assets/Asset 32.png',
    '/assets/Asset 3.png',
  ];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="w-full bg-white rounded-2xl p-4 sm:p-6 pt-[110px] ">
      <div className="relative overflow-hidden mx-[50px] lg:mx-[127px]">
        <div
          className={`flex gap-[30px] md:gap-[70px] animate-scroll`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {[...images, ...images].map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-28 h-28 transition duration-300 filter grayscale hover:grayscale-0 cursor-pointer rounded-xl p-2 sm:p-3 flex items-center justify-center"
            >
              <Image
                src={src}
                alt={`Partner ${idx + 1}`}
                width={64}
                height={64}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Gradient fade effects on sides */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>

      <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-50% - 24px));
                    }
                }

                .animate-scroll {
                    display: flex;
                    animation: scroll 10s linear infinite;
                }

                /* Mobile adjustments */
                @media (max-width: 640px) {
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(calc(-50% - 16px));
                        }
                    }
                }

                @media (max-width: 1024px) {
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(calc(-50% - 20px));
                        }
                    }
                }
            `}</style>
    </div>
  );
}
