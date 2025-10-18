import Timeline from "./Timeline";
import vintageComputer from "@/public/assets/2025-09-24 05.50.55.jpg";

const timelineEvents = [
    {
        year: 1981,
        title: "IBM PC Revolution",
        description:
            "The launch of the IBM PC revolutionized personal computing and helped democratize access to technology and digital skills.",
        image: vintageComputer,
    },
    {
        year: 2016,
        title: "AI Breakthrough",
        description:
            "Machine learning and artificial intelligence began transforming how we interact with technology, making it more accessible and intuitive.",
        image: vintageComputer,
    },
    {
        year: 2018,
        title: "Inclusive Design",
        description:
            "A global movement towards accessibility-first design ensured technology could be used by everyone, regardless of ability.",
        image: vintageComputer,
    },
    {
        year: 2020,
        title: "Remote Revolution",
        description:
            "The pandemic accelerated digital transformation, proving that technology can bridge gaps and connect people across distances.",
        image: vintageComputer,
    },
];

const WhatWeDo = () => {
    return (
        <section className="min-h-screen bg-background py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 relative inline-block">
                        What We Do
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-accent" />
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-8">
                        We combine training, product development, and consultancy to deliver impactful tech
                        solutions. With a focus on accessibility, innovation, and local relevance, our work bridges skill
                        gaps, builds tools that matter, and supports organizations in creating meaningful change
                        through technology
                    </p>
                </div>

                {/* Timeline */}
                <Timeline events={timelineEvents} />
            </div>
        </section>
    );
};

export default WhatWeDo;
