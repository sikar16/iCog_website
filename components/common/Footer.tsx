import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
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
                            To democratize access to technology and technology education through training, consultancy, and products enabling young people to harness their potential and shape the future.
                        </p>
                        <p className="text-sm">
                            <span className="font-bold">Vision - </span>
                            A world where technology is a force for good, accessible to all, and driven by the next generation of creators.
                        </p>

                        <div className="pe-[62px]">
                            <h3 className="font-semibold mb-2 text-base sm:text-lg">
                                Sign-up to get Newsletter
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 w-[150px] bg-[#2E2E2E] border-none"
                                />
                                <Button className="bg-white text-black hover:bg-white rounded-[0px_8px_0px_8px] w-full sm:w-auto">
                                    Send Email
                                </Button>
                            </div>

                            <div className="mt-[23px] flex gap-3">
                                {[
                                    { src: "/socialmedia/linkin.svg", alt: "linkedin" },
                                    { src: "/socialmedia/instagram.svg", alt: "instagram" },
                                    { src: "/socialmedia/twitter.png", alt: "twitter" },
                                    { src: "/socialmedia/facebook.svg", alt: "facebook" },
                                    { src: "/socialmedia/tik-tok.png", alt: "tiktok" },
                                    { src: "/socialmedia/youtube.svg", alt: "youtube" },
                                ].map((icon, i) => (
                                    <div
                                        key={i}
                                        className="w-[28px] h-[28px] flex items-center justify-center rounded bg-[#2E2E2E] hover:bg-[#444] cursor-pointer transition"
                                    >
                                        <Image src={icon.src} alt={icon.alt} width={16} height={16} />
                                    </div>
                                ))}
                            </div>

                        </div>


                    </div>
                </div>

                <div className="flex flex-row gap-8 sm:gap-12 flex-1 ">
                    <div className="flex-1">
                        <h3 className="font-semibold mb-4 text-base sm:text-lg">Quick Links</h3>
                        <nav className="flex flex-col gap-2 text-sm sm:text-base">
                            {["Home", "About", "Career", "Impact", "Our Team", "Blog"].map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="text-white hover:text-gray-400 transition-colors"
                                >
                                    {link}
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
                        <Button className="mt-4 bg-white text-black hover:bg-white rounded-[0px_8px_0px_8px] w-full sm:w-auto">
                            Contact Us
                        </Button>
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
