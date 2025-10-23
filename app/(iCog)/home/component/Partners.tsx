"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Partners() {
  const images = [
    '/assets/Partners Logo/Asset 10.png',
    '/assets/Partners Logo/Asset 11.png',
    '/assets/Partners Logo/Asset 12.png',
    '/assets/Partners Logo/Asset 15.png',
    '/assets/Partners Logo/Asset 16.png',
    '/assets/Partners Logo/Asset 17.png',
    '/assets/Partners Logo/Asset 18.png',
    '/assets/Partners Logo/Asset 19.png',
    '/assets/Partners Logo/Asset 20.png',
    '/assets/Partners Logo/Asset 21.png',
    '/assets/Partners Logo/Asset 22.png',
    '/assets/Partners Logo/Asset 23.png',
    '/assets/Partners Logo/Asset 24.png',
    '/assets/Partners Logo/Asset 25.png',
    '/assets/Partners Logo/Asset 26.png',
    '/assets/Partners Logo/Asset 27.png',
    '/assets/Partners Logo/Asset 28.png',
    '/assets/Partners Logo/Asset 29.png',
    '/assets/Partners Logo/Asset 3.png',
    '/assets/Partners Logo/Asset 30.png',
    '/assets/Partners Logo/Asset 31.png',
    '/assets/Partners Logo/Asset 32.png',
    '/assets/Partners Logo/Asset 5.png',
    '/assets/Partners Logo/Asset 6.png',
    '/assets/Partners Logo/Asset 7.png',
    '/assets/Partners Logo/Asset 8.png',
    '/assets/Partners Logo/Asset 9.png',
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
              className="flex-shrink-0 w-36 h-36 transition duration-300 filter grayscale hover:grayscale-0 cursor-pointer rounded-xl p-2 sm:p-3 flex items-center justify-center"
            >
              <Image
                src={src}
                alt={`Partner ${idx + 1}`}
                width={70}
                height={70}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

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
