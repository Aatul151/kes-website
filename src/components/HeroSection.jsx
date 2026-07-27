export default function HeroSection({ img = '', title = '', description = '' }) {
    return (<>
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={img}
                    alt="Our Banner"
                    className="w-full h-full object-cover object-center scale-100 mix-blend-normal"
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                    {title}
                </h1>
                <p className="text-zinc-100 text-base max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-[0_2px_5px_rgba(0,0,0,0.75)]">
                    {description}
                </p>
            </div>
        </section>
    </>)
}