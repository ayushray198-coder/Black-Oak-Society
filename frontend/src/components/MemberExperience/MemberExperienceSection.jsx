import MemberHeader from "./MemberHeader";
import MemberGrid from "./MemberGrid";

function MemberExperienceSection() {
    return (
        <section
            id="member-experience"
            className="
                relative overflow-hidden
                bg-[#050505]
                py-20
            "
        >
            {/* Top Glow */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute
                    left-1/2 top-0
                    h-72 w-72
                    -translate-x-1/2
                    rounded-full
                    bg-[#C89B3C]/10
                    blur-[130px]
                "
            />

            {/* Bottom Glow */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute
                    bottom-0 right-0
                    h-80 w-80
                    rounded-full
                    bg-[#C89B3C]/5
                    blur-[160px]
                "
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                <MemberHeader />

                <div className="mt-14">
                    <MemberGrid />
                </div>

            </div>
        </section>
    );
}

export default MemberExperienceSection;