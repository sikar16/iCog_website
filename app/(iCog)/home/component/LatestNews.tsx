"use client";
import CardImagesWithText from "../../../../components/common/CardImagesWithText";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function LatestNews() {
    const blogPosts = [
        {
            date: "October 31, 2024",
            imageSrc: "/assets/lates.svg",
            readTime: "4 minutes read",
            title: "Lorem Ipsum Dolor Sit Amet, Amet Consectetur Adipiscing",
        },
        {
            date: "October 31, 2024",
            imageSrc: "/assets/lates3.png",
            readTime: "4 minutes read",
            title: "Lorem Ipsum Dolor Sit Amet, Amet Consectetur Adipiscing",
        },
        {
            date: "October 31, 2024",
            imageSrc: "/assets/lates2.svg",
            readTime: "4 minutes read",
            title: "Lorem Ipsum Dolor Sit Amet, Amet Consectetur Adipiscing",
        },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.4 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            // when in view, trigger the sequence
            controls.start("titleVisible");
            const timer = setTimeout(() => {
                controls.start("cardsVisible");
            }, 800); // small delay before cards

            return () => clearTimeout(timer);
        } else {
            // when out of view, reset animations
            controls.start("hidden");
        }
    }, [isInView, controls]);

    const variants = {
        hidden: { opacity: 0, y: 100 },
        titleVisible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
        cardsVisible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2,
                duration: 0.8,
                ease: "easeOut",
            },
        },
        card: {
            hidden: { opacity: 1, y: 10 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.2, ease: "easeOut" },
            },
        },
    };

    return (
        <div ref={ref} className="lg:px-[150px] pt-[120px] pb-[116px] mx-auto overflow-hidden">
            {/* Title animation */}
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: variants.hidden,
                    titleVisible: variants.titleVisible,
                }}
                className="text-center"
            >
                <p className="text-[38px] font-semibold">
                    Latest news & articles
                </p>
            </motion.div>

            {/* Cards animation */}
            <motion.div
                className="mt-[50px] lg:flex justify-around gap-4"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: variants.hidden,
                    cardsVisible: variants.cardsVisible,
                }}
            >
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: variants.card.hidden,
                            visible: variants.card.visible,
                        }}
                    >
                        <CardImagesWithText
                            imageSrc={post.imageSrc}
                            date={post.date}
                            readTime={post.readTime}
                            title={post.title}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
