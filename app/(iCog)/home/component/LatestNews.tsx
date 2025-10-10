"use client"
import CardImagesWithText from '../../../../components/common/CardImagesWithText';
import React from 'react';
import { motion } from 'framer-motion';

export default function LatestNews() {
    const blogPosts = [
        {
            date: "October 31, 2024",
            imageSrc: "/assets/lates.svg",
            readTime: "4 minutes read",
            title: "Lorem Ipsum Dolor Sit Amet, Amet Consectetur Adipiscing"
        },
        {
            date: "October 31, 2024",
            imageSrc: "/assets/lates3.png",
            readTime: "4 minutes read",
            title: "Lorem Ipsum Dolor Sit Amet, Amet Consectetur Adipiscing"
        },
        {
            date: "October 31, 2024",
            imageSrc: "/assets/lates2.svg",
            readTime: "4 minutes read",
            title: "Lorem Ipsum Dolor Sit Amet, Amet Consectetur Adipiscing"
        },
    ];

    const cardAnimation = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const containerAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0, // 👈 makes cards appear one by one
                delayChildren: 0
            }
        }
    };

    return (
        <div className='lg:px-[150px] pt-[90px] pb-[116px] mx-auto'>
            {/* Title animation */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: false, amount: 0.3 }} // 👈 animate only first time
                transition={{ duration: 0.6 }}
            >
                <p className='text-[38px] text-center font-semibold'>
                    Latest news & articles
                </p>
            </motion.div>

            {/* Cards animation */}
            <motion.div
                className='mt-[50px] lg:flex justify-around gap-4'
                variants={containerAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={index}
                        variants={cardAnimation}
                    // whileHover={{
                    //     y: -5,
                    //     scale: 1.02,
                    //     transition: { duration: 0.2 }
                    // }}
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
