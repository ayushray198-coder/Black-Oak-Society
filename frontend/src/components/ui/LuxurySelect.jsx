import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function LuxurySelect({
    options = [],
    value,
    onChange,
    placeholder = "Select",
    className = "",
}) {
    const [open, setOpen] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (
                selectRef.current &&
                !selectRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    const getLabel = (option) =>
        typeof option === "object"
            ? option.label
            : option;

    const getValue = (option) =>
        typeof option === "object"
            ? option.value
            : option;

    const selectedLabel =
        options.find(
            (option) => getValue(option) === value
        )?.label ||
        value ||
        placeholder;

    return (
        <div
            ref={selectRef}
            className={`relative ${className}`}
        >
            <button
                type="button"
                onClick={() =>
                    setOpen((prev) => !prev)
                }
                className="flex h-12 min-w-[180px] items-center justify-between rounded-full border border-[#C8A04D]/15 bg-[#111111] px-5 text-sm text-white transition-all duration-300 hover:border-[#C8A04D]/40"
            >
                <span>{selectedLabel}</span>

                <ChevronDown
                    size={16}
                    className={`text-[#C8A04D] transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            <div
                className={`absolute left-0 top-[calc(100%+10px)] z-50 w-full overflow-hidden rounded-2xl border border-[#C8A04D]/15 bg-[#111111] shadow-[0_20px_60px_rgba(0,0,0,.6)] transition-all duration-300 ${
                    open
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                }`}
            >
                {options.map((option) => (
                    <button
                        key={getValue(option)}
                        type="button"
                        onClick={() => {
                            onChange(getValue(option));
                            setOpen(false);
                        }}
                        className={`flex w-full items-center px-5 py-3 text-left text-sm transition-all duration-200 ${
                            value === getValue(option)
                                ? "bg-[#C8A04D]/10 text-[#D8B46A]"
                                : "text-white hover:bg-[#C8A04D]/10 hover:text-[#D8B46A]"
                        }`}
                    >
                        {getLabel(option)}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default LuxurySelect;