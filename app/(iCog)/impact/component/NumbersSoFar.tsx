export default function NumbersSoFar() {
    return (
        <section className="min-h-[415px] bg-background flex items-center justify-center px-8">
            <div className="max-w-6xl w-full mx-auto">
                <h2 className="text-[48px] font-bold text-left mb-[22px] text-foreground">
                    Numbers so far
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-[36px]">
                    <div className="border-r border-border pr-6">
                        <StatCard number="9+" label="Years of experience" />
                    </div>

                    <div className="md:border-r border-border pr-6">
                        <StatCard number="24+" label="Cities reached" />
                    </div>

                    <div className="border-r border-border pr-6">
                        <StatCard number="40+" label="Partners across the world" />
                    </div>

                    <StatCard number="118K" label="Impacted kids and young adults" />
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
