function HeroDivider() {
    return (
        <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none bg-[#050505]">
            <svg
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                className="block h-[90px] w-full lg:h-[120px]"
            >
                <defs>
                    {/* Golden Fill */}
                    <radialGradient id="goldGlow" cx="50%" cy="0%" r="90%">
                        <stop offset="0%" stopColor="#D4A63A" stopOpacity="0.28" />
                        <stop offset="30%" stopColor="#B9872A" stopOpacity="0.14" />
                        <stop offset="65%" stopColor="#2E2414" stopOpacity="0.06" />
                        <stop offset="100%" stopColor="#050505" stopOpacity="1" />
                    </radialGradient>

                    {/* Golden Blur */}
                    <filter id="goldBlur" x="-50%" y="-100%" width="200%" height="300%">
                        <feGaussianBlur stdDeviation="35" />
                    </filter>
                </defs>

                {/* Solid Background */}
                <rect
                    x="0"
                    y="0"
                    width="1440"
                    height="120"
                    fill="#050505"
                />

                {/* Golden Smoke */}
                <ellipse
                    cx="720"
                    cy="18"
                    rx="380"
                    ry="75"
                    fill="#D4A63A"
                    opacity="0.18"
                    filter="url(#goldBlur)"
                />

                {/* Divider Shape */}
                <path
                    d="
                        M0,120
                        L0,70
                        C260,70 420,20 720,20
                        C1020,20 1180,70 1440,70
                        L1440,120
                        Z
                    "
                    fill="url(#goldGlow)"
                />

                {/* Luxury Border */}
                <path
                    d="
                        M0,70
                        C260,70 420,20 720,20
                        C1020,20 1180,70 1440,70
                    "
                    fill="none"
                    stroke="#B98A2E"
                    strokeWidth="1.2"
                />
            </svg>
        </div>
    );
}

export default HeroDivider;