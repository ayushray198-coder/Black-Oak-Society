import { User, Mail, Phone, BadgeCheck, Pencil } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Profile() {
    const { user } = useAuth();

    if (!user) {
        return (
            <div className="container flex min-h-[70vh] items-center justify-center">
                <p className="text-gray-400">Loading Profile...</p>
            </div>
        );
    }

    const avatarLetter = user.fullName?.charAt(0).toUpperCase();

    return (
        <section className="container py-28">

            {/* Heading */}

            <div className="mb-8 text-center">

                <p className="mb-3 text-sm uppercase tracking-[6px] text-[#D8B46A]">
                    My Account
                </p>

                <h3 className="text-4xl font-semibold">
                    Profile
                </h3>

            </div>

            {/* Card */}

            <div className="mx-auto max-w-3xl rounded-3xl border border-[#D8B46A]/15 bg-[#111]/80 p-10 backdrop-blur-lg">

                {/* Top */}

                <div className="flex flex-col items-center border-b border-white/10 pb-8">

                    <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#F3D58E] to-[#C89B3C] text-4xl font-bold text-black">
                        {avatarLetter}
                    </div>

                    <h4 className="text-2xl font-semibold">
                        {user.fullName}
                    </h4>

                    <p className="mt-2 text-sm uppercase tracking-[3px] text-[#D8B46A]">
                        {user.role}
                    </p>

                </div>

                {/* Information */}

                <div className="mt-10 space-y-6">

                                        {/* Full Name */}

                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-all duration-300 hover:border-[#D8B46A]/30">
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D8B46A]/10 text-[#D8B46A]">
                                <User size={20} />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[2px] text-gray-500">
                                    Full Name
                                </p>

                                <h5 className="mt-1 text-base font-medium">
                                    {user.fullName}
                                </h5>
                            </div>
                        </div>
                    </div>

                    {/* Email */}

                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-all duration-300 hover:border-[#D8B46A]/30">
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D8B46A]/10 text-[#D8B46A]">
                                <Mail size={20} />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[2px] text-gray-500">
                                    Email Address
                                </p>

                                <h5 className="mt-1 text-base font-medium break-all">
                                    {user.email}
                                </h5>
                            </div>
                        </div>
                    </div>

                    {/* Phone */}

                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-all duration-300 hover:border-[#D8B46A]/30">
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D8B46A]/10 text-[#D8B46A]">
                                <Phone size={20} />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[2px] text-gray-500">
                                    Phone Number
                                </p>

                                <h5 className="mt-1 text-base font-medium">
                                    {user.phoneNumber || "Not Added"}
                                </h5>
                            </div>
                        </div>
                    </div>

                    {/* Verification */}

                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-all duration-300 hover:border-[#D8B46A]/30">

                        <div className="flex items-center gap-4">

                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D8B46A]/10 text-[#D8B46A]">
                                <BadgeCheck size={20} />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[2px] text-gray-500">
                                    Account Status
                                </p>

                                <h5 className="mt-1 text-base font-medium">
                                    {user.isVerified ? "Verified" : "Not Verified"}
                                </h5>
                            </div>

                        </div>

                        <span
                            className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[2px] ${
                                user.isVerified
                                    ? "bg-[#D8B46A]/15 text-[#D8B46A]"
                                    : "bg-white/10 text-gray-400"
                            }`}
                        >
                            {user.isVerified ? "Active" : "Pending"}
                        </span>

                    </div>

                                        {/* Action Button */}

                    <div className="pt-6">
                        <button
                            type="button"
                            onClick={() => alert("Edit Profile feature is coming soon.")}
                            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[#D8B46A] bg-[#D8B46A]/10 px-6 py-4 font-medium text-[#D8B46A] transition-all duration-300 hover:bg-[#D8B46A] hover:text-black hover:shadow-[0_0_30px_rgba(216,180,106,.25)]"
                        >
                            <Pencil size={18} />
                            Edit Profile
                        </button>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Profile;