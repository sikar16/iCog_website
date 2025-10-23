"use client";
import CardImagesWithText from "../../../../components/common/CardImagesWithText";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function LatestNews() {
    const blogPosts = [
        {
            date: "October 31, 2024",
            imageSrc: "/assets/Home Page/9b17baa91ae89e73e063437e545b6b28cdbc927a.png",
            readTime: "4 minutes read",
            title: "Lorem Ipsum Dolor Sit Amet, Amet Consectetur Adipiscing",
        },
        {
            date: "October 31, 2024",
            imageSrc: "/assets/Home Page/4a7d40b9d3401801254077bdb3e678c98f391834.jpg ",
            readTime: "4 minutes read",
            title: "Lorem Ipsum Dolor Sit Amet, Amet Consectetur Adipiscing",
        },
        {
            date: "October 31, 2024",
            imageSrc: "/assets/Home Page/23270ff8a27dab1aafa56385255ff71da8b6adc7.jpg",
            readTime: "4 minutes read",
            title: "Lorem Ipsum Dolor Sit Amet, Amet Consectetur Adipiscing",
        },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("titleVisible");
            const timer = setTimeout(() => {
                controls.start("cardsVisible");
            }, 800);

            return () => clearTimeout(timer);
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    const variants = {
        hidden: { opacity: 0, y: 100 },
        titleVisible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
        cardsVisible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2,
                duration: 0.8,
            },
        },
        card: {
            hidden: { opacity: 1, y: 10 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.2 },
            },
        },
    };

    return (
        <div ref={ref} className="px-4 lg:px-[100px] xl:px-[150px] pt-[120px] pb-[116px] mx-auto overflow-hidden">
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: variants.hidden,
                    titleVisible: variants.titleVisible,
                }}
                className="text-center"
            >
                <p className="text-[30px] md:text-[38px] font-semibold">
                    Latest news & article
                </p>
            </motion.div>

            <motion.div
                className="
                    mt-10 md:mt-[50px]
                    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                    gap-6 md:gap-8 lg:gap-10
                    justify-items-center
                "
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
