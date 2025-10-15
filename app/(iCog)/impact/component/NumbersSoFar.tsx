export default function NumbersSoFar() {
    return (
        <section className="min-h-[415px] bg-background flex items-center justify-center px-8">
            <div className="max-w-6xl w-full mx-auto">
                <h2 className="text-[48px] font-bold text-left mb-[22px] text-foreground">
                    Numbers so far
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-[36px]">
                    <div className="border-r border-border pr-6">
                        <StatCard number="1.18K+" label="Kids and young adults reached" />
                    </div>

                    <div className="md:border-r border-border pr-6">
                        <StatCard number="430+" label="Girls engaged through our program" />
                    </div>

                    <div className="border-r border-border pr-6">
                        <StatCard number="41" label="Partner organizations collaborated with" />
                    </div>

                    <StatCard number="30" label="Projects successfully completed" />
                </div>
            </div>
        </section>
    );
}

function StatCard({ number, label }: { number: string; label: string }) {
    return (
        <div className="text-left">
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {number}
            </div>
            <div className="text-sm text-muted-foreground leading-snug">{label}</div>
        </div>
    );
}
