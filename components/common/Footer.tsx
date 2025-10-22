import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    const links = [
        { name: "Home", href: "/home" },
        { name: "About", href: "/about" },
        { name: "Impact", href: "/impact" },
        { name: "Careers", href: "/careers" },
        { name: "Teams", href: "/teams" },

    ]
    return (
        <footer className="bg-black text-white pt-14 px-4 sm:px-8 lg:px-14 w-full">
            <div className="flex flex-col md:flex-row md:justify-between gap-10 sm:gap[100px] lg:gap-[200px]">
                <div className="flex-1 ">
                    <div className="mb-6">
                        <Image
                            src="/whiteLogo.svg"
                            alt="iCog logo"
                            width={126}
                            height={52}
                        />
                    </div>
                    <p className="text-white mb-4 text-sm sm:text-base">
                        iCog, previously known as (iCog Anyone Can Code), is an affiliate of iCog Labs.
                    </p>

                    <div className="space-y-4">
                        <p className="text-sm">
                            <span className="font-bold">Mission - </span>
                            To democratize access to technology and technology education through training, consultancy, and products enabling young people to harness their potential and shape the future.                        </p>
                        <p className="text-sm">
                            <span className="font-bold">Vision - </span>
                            A world where technology is a force for good, accessible to all, and driven by the next generation of creators.
                        </p>

                        <div className="pe-[62px]">
                            <h3 className="font-semibold mb-2 text-base sm:text-lg">
                                Sign-up to get Newsletter
                            </h3>
                            <div className="flex flex-col flex-row gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 w-[150px] bg-[#2E2E2E] border-none"
                                />
                                <Button className="bg-white text-black hover:bg-white rounded-[0px_8px_0px_8px] w-full w-auto cursor-pointer">
                                    Send Email
                                </Button>
                            </div>

                            <div className="mt-[23px] flex gap-3">
                                {[
                                    {
                                        src: "/socialmedia/linkin.svg",
                                        alt: "linkedin",
                                        href: "https://www.linkedin.com/company/icoga/",
                                    },
                                    {
                                        src: "/socialmedia/instagram.svg",
                                        alt: "instagram",
                                        href: "https://www.instagram.com/icog__?igsh=bW1kY3RiMDdrMDVm",
                                    },
                                    {
                                        src: "/socialmedia/twitter.png",
                                        alt: "twitter",
                                        href: "https://x.com/icog__?s=21",
                                    },
                                    {
                                        src: "/socialmedia/facebook.svg",
                                        alt: "facebook",
                                        href: "https://www.facebook.com/share/1FDBu9aMYN/?mibextid=wwXIfr",
                                    },
                                    {
                                        src: "/socialmedia/tik-tok.png",
                                        alt: "tiktok",
                                        href: "https://www.tiktok.com/@icog___?_t=ZM-90jc89WDS0a&_r=1",
                                    },
                                    {
                                        src: "/socialmedia/youtube.svg",
                                        alt: "youtube",
                                        href: "https://youtube.com/@icog-0?si=l4l07h9NWBFnzAm",
                                    },
                                ].map((icon, i) => (
                                    <a
                                        key={i}
                                        href={icon.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-[28px] h-[28px] flex items-center justify-center rounded bg-[#2E2E2E] hover:bg-[#444] cursor-pointer transition"
                                    >
                                        <Image src={icon.src} alt={icon.alt} width={16} height={16} />
                                    </a>
                                ))}
                            </div>

                        </div>


                    </div>
                </div>

                <div className="flex flex-row gap-8 sm:gap-12 flex-1 ">
                    <div className="flex-1">
                        <h3 className="font-semibold mb-4 text-base sm:text-lg">Quick Links</h3>
                        <nav className="flex flex-col gap-2 text-sm sm:text-base">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-white hover:text-gray-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>


                    <div className="flex-1">
                        <h3 className="font-semibold mb-4 text-base sm:text-lg">Address</h3>
                        <div className="space-y-2 text-sm sm:text-base">
                            <div className="flex items-center gap-2">
                                <span className="p-1 bg-[#333333] rounded-sm">
                                    <MapPin color="#f6f6f6" size={16} />
                                </span>
                                <span>Namibia St, Lingo Tower, 12th Floor</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="p-1 bg-[#333333] rounded-sm">
                                    <Phone color="#f6f6f6" size={16} />
                                </span>
                                <span>+251-(0)-904261279</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="p-1 bg-[#333333] rounded-sm">
                                    <Mail color="#f6f6f6" size={16} />
                                </span>
                                <span>Info@icog.et</span>
                            </div>
                        </div>
                        <a
                            href="mailto:info@icog.et"
                            className="mt-4 inline-block w-full sm:w-auto"
                        >
                            <Button className="bg-white text-black hover:bg-gray-100 rounded-[0px_8px_0px_8px] w-full sm:w-auto cursor-pointer">
                                Contact Us
                            </Button>
                        </a>

                    </div>
                </div>
            </div>


            <div className="mt-10 pb-[27px] border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-sm sm:text-base">
                <p>© 2025 Company. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-gray-400">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        Terms of Use
                    </a>
                </div>
            </div>
        </footer>
    );
}
