"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import {
    Menubar,
    MenubarMenu,
} from "@/components/ui/menubar"
import { X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const links = [
        { name: "Home", href: "/home" },
        { name: "About", href: "/about" },
        { name: "Impact", href: "/impact" },
        { name: "Careers", href: "/careers" },
        { name: "Teams", href: "/teams" },

    ]
    return (
        <div className="fixed top-0 left-0 z-50 w-full border-b border-transparent bg-white/40 backdrop-blur-lg px-10 sm:px-10 py-[14px] ">
            <div className='  flex justify-between items-center'>
                <Link href="/home" className="cursor-pointer hover:opacity-80 transition-opacity">
                    <Image
                        src="/assets/logo.svg"
                        alt='iCog logo'
                        width={126}
                        height={52}
                    />
                </Link>
                <div className='hidden md:flex gap-7'>
                    <Menubar className='border-0 shadow-none gap-7 bg-transparent'>
                        <MenubarMenu>
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-[16px] hover:text-muted-foreground transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </MenubarMenu>
                    </Menubar>
                </div>

                <div className='md:hidden'>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={28} /> :
                            <Image src="/menu.svg" alt="Menu" width={35} height={35} />
                        }
                    </button>
                </div>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25 }}
                            className='absolute top-full left-0 w-full  border-t border-gray-200 shadow-md md:hidden bg-white/100 '
                        >
                            <div className='flex flex-col p-4 gap-4'>
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className='text-[16px] py-2 rounded-lg text-left hover:bg-gray-100 transition px-3.5'
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>
    )
}

