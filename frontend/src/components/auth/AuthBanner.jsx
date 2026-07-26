import bannerImage from "../../assets/images/Auth-banner.png";

const AuthBanner = () => {
    return (
        <div className="relative hidden min-h-[720px] w-full overflow-hidden rounded-[36px] border border-[#D8B46A]/10 shadow-[0_25px_80px_rgba(0,0,0,.45)] lg:flex">
            <img
                src={bannerImage}
                alt="Black Oak Society"
                className="absolute inset-0 h-full w-full scale-[1.05] object-cover object-right transition-all duration-700" />

            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/25" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D8B46A]/10 blur-[120px]" />

            <div className="relative z-10 flex h-full flex-col justify-between p-14">
                <div>
                    <p className="text-sm uppercase tracking-[0.55em] text-[#D8B46A]">
                        BLACK OAK SOCIETY
                    </p>
                </div>

                <div>
                    <h2 className="max-w-lg text-6xl font-light leading-[1.08]">
                        Crafted for the
                        <span className="block text-[#D8B46A]">
                            Extraordinary.
                        </span>
                    </h2>

                    <p className="mt-8 max-w-md text-lg leading-9 text-white/75">
                        Experience a carefully curated collection of the world's
                        most prestigious whiskies through an immersive luxury
                        shopping experience.
                    </p>
                </div>

                <div className="flex items-center gap-12 border-t border-white/10 pt-8">
                    <div>
                        <h3 className="text-5xl font-light text-[#D8B46A]">
                            30+
                        </h3>

                        <p className="mt-2 text-sm uppercase tracking-widest text-white/55">
                            Brands
                        </p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-light text-[#D8B46A]">
                            500+
                        </h3>

                        <p className="mt-2 text-sm uppercase tracking-widest text-white/55">
                            Bottles
                        </p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-light text-[#D8B46A]">
                            24/7
                        </h3>

                        <p className="mt-2 text-sm uppercase tracking-widest text-white/55">
                            Support
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthBanner;