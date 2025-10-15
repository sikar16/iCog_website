"use client";

import { useState } from "react";

export default function TalentRosterForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        currentRole: "",
        yearsOfExperience: "",
        linkedIn: "",
        resume: null as File | null,
        newsletter: false,
    });
    console.log(setFormData);
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value, type } = e.target;

    //     if (type === "checkbox") {
    //         const checked = (e.target as HTMLInputElement).checked;
    //         setFormData(prev => ({ ...prev, [name]: checked }));
    //     } else if (type === "file") {
    //         const file = (e.target as HTMLInputElement).files?.[0] || null;
    //         setFormData(prev => ({ ...prev, [name]: file }));
    //     } else {
    //         setFormData(prev => ({ ...prev, [name]: value }));
    //     }
    // };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section className="w-full  bg-white justify-center my-[105px] px-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
                {/* Left: Image & Text */}
                <div className="relative lg:w-1/3 h-[450px] lg:h-[560px] overflow-hidden group">
                    <div
                        className="absolute inset-0 transition-all duration-1000"
                        style={{
                            backgroundImage: "url('/assets/statistics1.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-1000 group-hover:opacity-0"></div>

                    <div className="relative z-10 flex flex-col h-full p-10 text-white">
                        <h1 className="text-xl md:text-5xl font-bold mb-3">
                            Talent Roster
                        </h1>
                        <p className="text-sm mb-8 leading-relaxed">
                            An Open-Source Platform Crowdsourcing Language Data For Ethiopian Languages To Improve AI And NLP Tools.
                        </p>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="lg:w-3/4 px-10 py-[20px] bg-[#F8F8F8]">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-200 bg-white"

                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-200 bg-white"

                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-200 bg-white"

                                />
                            </div>

                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-400 mb-2">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-200 bg-white"

                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="currentRole" className="block text-sm font-medium text-gray-400 mb-2">
                                    Current Role
                                </label>
                                <input
                                    type="text"
                                    id="currentRole"
                                    name="currentRole"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-200 bg-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-400 mb-2">
                                    Years of Experience
                                </label>
                                <input
                                    type="number"
                                    id="yearsOfExperience"
                                    name="yearsOfExperience"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-200 bg-white"
                                    min="0"
                                    max="50"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-400 mb-2">
                                    LinkedIn Profile Or Personal Website
                                </label>
                                <input
                                    type="url"
                                    id="linkedIn"
                                    name="linkedIn"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-200 bg-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="resume" className="block text-sm font-medium text-gray-400 mb-2">
                                    CV/Resume Upload
                                </label>
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    accept=".pdf,.doc,.docx,.txt"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-200 bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-400 hover:file:bg-gray-200"
                                />
                            </div>
                        </div>

                        <div
                            className="flex items-center space-x-3"
                        >
                            <input
                                type="checkbox"
                                id="newsletter"
                                name="newsletter"
                                className="w-4 h-4 text-gray-400 bg-white border-gray-300 rounded focus:ring-gray-500 focus:ring-2"
                            />
                            <label htmlFor="newsletter" className="text-sm font-medium text-gray-400">
                                Do you want to subscribe to our monthly newsletter
                            </label>
                        </div>
                        <div className="flex justify-end mt-[18px]">
                            <button className="px-4 py-2 text-white bg-black rounded-[0px_12px_0px_12px] hover:bg-gray-800">
                                Submit Form
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section >
    );
}