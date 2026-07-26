import { useRef } from "react";

const OTPInput = ({ value, onChange, length = 6 }) => {
    const inputRefs = useRef([]);

    const otp = value.split("");

    const updateOTP = (newOTP) => {
        onChange(newOTP.join(""));
    };

    const handleChange = (index, e) => {
        const input = e.target.value;

        if (!/^\d*$/.test(input)) return;

        const newOTP = [...otp];

        newOTP[index] = input.slice(-1);

        updateOTP(newOTP);

        if (input && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace") {
            if (otp[index]) {
                const newOTP = [...otp];
                newOTP[index] = "";
                updateOTP(newOTP);
            } else if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }

        if (e.key === "ArrowLeft" && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }

        if (e.key === "ArrowRight" && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();

        const pasted = e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, length);

        const newOTP = pasted.split("");

        while (newOTP.length < length) {
            newOTP.push("");
        }

        updateOTP(newOTP);

        const lastIndex = Math.min(pasted.length, length) - 1;

        if (lastIndex >= 0) {
            inputRefs.current[lastIndex]?.focus();
        }
    };

    return (
        <div className="flex w-full justify-center gap-2 sm:gap-3">
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={otp[index] || ""}
                    onChange={(e) => handleChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="
                    h-14
                    w-12
                   sm:h-16
                   sm:w-14
                   lg:w-16
            rounded-2xl
            border
            border-[#D8B46A]/20
            bg-white/[0.04]
            text-center
            text-2xl
            font-semibold
            text-white
            outline-none
            backdrop-blur-xl
            transition-all
            duration-300
            focus:border-[#D8B46A]
            focus:shadow-[0_0_25px_rgba(216,180,106,0.25)]
          "
                />
            ))}
        </div>
    );
};

export default OTPInput;