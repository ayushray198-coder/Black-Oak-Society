import MemberCard from "./MemberCard";
import { memberData } from "./memberData";

function MemberGrid() {
    return (
        <div
            className="
                mx-auto
                grid
                max-w-[1450px]
                grid-cols-1
                gap-6
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-5
            "
        >
            {memberData.benefits.map((benefit) => (
                <MemberCard
                    key={benefit.id}
                    benefit={benefit}
                />
            ))}
        </div>
    );
}

export default MemberGrid;