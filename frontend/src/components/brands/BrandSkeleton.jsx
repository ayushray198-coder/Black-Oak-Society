function BrandSkeleton() {
    return (
        <article className="relative h-[430px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] animate-pulse">

            {/* Banner */}

            <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 via-zinc-900 to-black" />

            <div className="relative z-10 flex h-full flex-col justify-between px-7 py-8">

                {/* Featured Badge */}

                <div className="h-8 w-24 rounded-full bg-[#C89B3C]/20" />

                {/* Logo */}

                <div className="flex flex-1 items-center justify-center">
                    <div className="h-28 w-40 rounded-2xl bg-white/10" />
                </div>

                {/* Content */}

                <div>

                    <div className="mx-auto h-8 w-2/3 rounded-full bg-white/10" />

                    <div className="mx-auto mt-5 h-4 w-full rounded-full bg-white/10" />

                    <div className="mx-auto mt-3 h-4 w-5/6 rounded-full bg-white/10" />

                    <div className="my-6 h-px w-full bg-white/10" />

                    <div className="mx-auto h-12 w-52 rounded-xl border border-[#C89B3C]/20 bg-[#C89B3C]/10" />

                </div>

            </div>

        </article>
    );
}

export default BrandSkeleton;