/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/assets/Career/photo_2025-10-21_16-36-11.jpg",
    "/assets/Career/photo_2025-10-21_14-10-24.jpg",
    "/assets/Career/photo_2025-10-21_16-36-24.jpg",
    "/assets/Career/IMG_4528.PNG",
    "/assets/Career/photo_2025-10-21_14-10-29.jpg",
    "/assets/Career/photo_2025-10-21_16-36-15.jpg",
    "/assets/Career/photo_2025-10-21_16-36-31.jpg",
  ];

  const centerIndex = Math.floor(images.length / 2);

  // 🎯 CONTROL THE ARCH SCALE HERE
  const centerHeight = 270;
  const outerHeights = [centerHeight, 305, 380, 440];

  // --- Continuous loop logic ---
  const [offset, setOffset] = useState(0);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Trigger mount animation
  useEffect(() => {
    setHasAnimated(true);
    // Disable animation after it completes
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000); // Duration + max delay (1.4s + 0.36s for furthest image + buffer)
    
    return () => clearTimeout(timer);
  }, []);

  // Update offset continuously while dragging
  useAnimationFrame(() => {
    const current = x.get();
    if (Math.abs(current) > 0.5) {
      setOffset((prev) => prev + current * 0.01); // increased sensitivity for smoother scrolling
    }
  });

  const handleDrag = (_: any, info: any) => {
    x.set(info.delta.x);
  };

  const handleDragEnd = () => {
    x.set(0); // stop movement immediately
  };

  // Utility for looping index
  const modIndex = (index: number, length: number) =>
    ((index % length) + length) % length;

  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col items-center justify-start bg-background">
      {/* SVG Clip Paths */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          {/* Rectangle for center */}
          <clipPath id="clip-center" clipPathUnits="objectBoundingBox">
            <rect x="0" y="0" width="1" height="1" rx="0.05" ry="0.05" />
          </clipPath>

          {/* Trapezoid shapes for left and right */}
          {[1, 2, 3].map((dist) => {
            const innerHeight = outerHeights[dist - 1];
            const outerHeight = outerHeights[dist];
            const topOffset = (outerHeight - innerHeight) / 2 / outerHeight;
            const bottomOffset = 1 - topOffset - innerHeight / outerHeight;

            return (
              <clipPath
                key={`left-${dist}`}
                id={`clip-left-${dist}`}
                clipPathUnits="objectBoundingBox"
              >
                <path
                  d={`
                    M 0.05 0
                    L 0.95 ${topOffset}
                    Q 1 ${topOffset} 1 ${topOffset + 0.05}
                    L 1 ${1 - bottomOffset - 0.05}
                    Q 1 ${1 - bottomOffset} 0.95 ${1 - bottomOffset}
                    L 0.05 1
                    Q 0 1 0 0.95
                    L 0 0.05
                    Q 0 0 0.05 0
                    Z
                  `}
                />
              </clipPath>
            );
          })}

          {[1, 2, 3].map((dist) => {
            const innerHeight = outerHeights[dist - 1];
            const outerHeight = outerHeights[dist];
            const topOffset = (outerHeight - innerHeight) / 2 / outerHeight;
            const bottomOffset = 1 - topOffset - innerHeight / outerHeight;

            return (
              <clipPath
                key={`right-${dist}`}
                id={`clip-right-${dist}`}
                clipPathUnits="objectBoundingBox"
              >
                <path
                  d={`
                    M 0.05 ${topOffset}
                    Q 0 ${topOffset} 0 ${topOffset + 0.05}
                    L 0 ${1 - bottomOffset - 0.05}
                    Q 0 ${1 - bottomOffset} 0.05 ${1 - bottomOffset}
                    L 0.95 1
                    Q 1 1 1 0.95
                    L 1 0.05
                    Q 1 0 0.95 0
                    Z
                  `}
                />
              </clipPath>
            );
          })}
        </defs>
      </svg>

      {/* Header */}
      <div className="w-full mt-[120px] text-center my-16 md:mb-6 px-4 z-10">
        <h1 className="text-[40px] md:text-[53px] font-bold mb-4 text-foreground">
          What It Means to Work at iCog
        </h1>
        <p className="text-[16px] text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Working at iCog means being part of a team that&apos;s curious,
          creative, and committed to making a real difference. Whether you join
          as an intern or a full-time team member, you&apos;re welcomed into an
          environment that values{" "}
          <span className="font-semibold text-foreground">learning</span>,{" "}
          <span className="font-semibold text-foreground">team-work</span> and{" "}
          <span className="font-semibold text-foreground">
            technology for positive change
          </span>
          .
        </p>
      </div>

      {/* Gallery */}
      <div className="relative w-full max-w-7xl mx-auto px-4 mb-16" ref={containerRef}>
        <motion.div
          className="flex items-center justify-center gap-1 md:gap-7 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
        >
          {Array.from({ length: 19 }).map((_, visibleIndex) => {
            // Get fractional and integer parts of offset
            const fractionalOffset = offset - Math.floor(offset);
            const baseIndex = Math.floor(offset);
            
            // Calculate which image to show
            const effectiveIndex = modIndex(baseIndex + visibleIndex - 1, images.length);
            const image = images[effectiveIndex];

            // Calculate the smooth relative position from center
            const relativePosition = visibleIndex - 1 - centerIndex - fractionalOffset;
            const absolutePosition = Math.abs(relativePosition);
            
            // Skip rendering items too far from center
            if (absolutePosition > 3.5) return null;
            
            const isLeft = relativePosition < 0;

            // Smooth interpolation for all properties
            const clampedDistance = Math.min(absolutePosition, 3);
            
            // Interpolate width smoothly
            const baseWidth = 180;
            const width = baseWidth + clampedDistance * 10;
            
            // Interpolate height smoothly
            const getHeightForDistance = (dist: number) => {
              if (dist <= 0) return centerHeight;
              if (dist >= 3) return outerHeights[3];
              
              const lowerIndex = Math.floor(dist);
              const upperIndex = Math.ceil(dist);
              const fraction = dist - lowerIndex;
              
              const lowerHeight = lowerIndex === 0 ? centerHeight : outerHeights[lowerIndex];
              const upperHeight = outerHeights[upperIndex];
              
              return lowerHeight + (upperHeight - lowerHeight) * fraction;
            };
            
            const height = getHeightForDistance(clampedDistance);
            
            // Interpolate rotation smoothly
            const rotate = isLeft ? clampedDistance * 2 : -clampedDistance * 2;
            
            // Determine clip path based on rounded distance for stability
            const roundedDistance = Math.round(absolutePosition);
            const clipPathId = roundedDistance === 0 
              ? "clip-center"
              : isLeft
                ? `clip-left-${Math.min(roundedDistance, 3)}`
                : `clip-right-${Math.min(roundedDistance, 3)}`;

            // Calculate smooth horizontal translation
            const gapSize = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 7;
            const translateX = -fractionalOffset * (baseWidth + gapSize + 10);

            return (
              <motion.div
                key={`${effectiveIndex}-${visibleIndex}`}
                className="relative flex-shrink-0"
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  clipPath: `url(#${clipPathId})`,
                  zIndex: Math.round(20 - absolutePosition),
                  transform: `translateX(${translateX}px) rotateY(${rotate}deg)`,
                  backfaceVisibility: "hidden",
                }}
                {...(!animationComplete && {
                  initial: {
                    scale: 2.5,
                    opacity: 0,
                  },
                  animate: hasAnimated ? {
                    scale: [2.5, 0.92, 1],
                    opacity: 1,
                  } : {},
                  transition: {
                    duration: 1.4,
                    delay: absolutePosition * 0.12,
                    ease: [0.34, 1.56, 0.64, 1], // Custom cubic-bezier for bounce effect
                    opacity: { duration: 0.6 }
                  }
                })}
              >
                <Image
                  src={image}
                  alt={`iCog team culture ${visibleIndex + 1}`}
                  fill
                  className="object-cover pointer-events-none select-none"
                  sizes="(max-width: 768px) 150px, 220px"
                  draggable={false}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
