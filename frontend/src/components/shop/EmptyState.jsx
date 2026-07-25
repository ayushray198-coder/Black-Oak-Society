import { PackageSearch, RotateCcw } from "lucide-react";

function EmptyState({
    title = "No Products Found",
    description = "We couldn't find any products matching your current filters. Try adjusting your search or reset the filters.",
    buttonText = "Reset Filters",
    onReset,
}) {
    return (
        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-[#C8A04D]/10 bg-[#0B0B0B] px-6 text-center">

            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#C8A04D]/15 bg-[#111111]">
                <PackageSearch
                    size={36}
                    className="text-[#C8A04D]"
                />
            </div>

            <h2 className="mb-3 text-2xl font-semibold text-white">
                {title}
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/60">
                {description}
            </p>

            {onReset && (
                <button
                    type="button"
                    onClick={onReset}
                    className="mt-8 flex h-11 items-center gap-2 rounded-full border border-[#C8A04D]/20 bg-[#111111] px-6 text-sm font-medium text-white transition-all duration-300 hover:border-[#C8A04D]/50 hover:bg-[#C8A04D] hover:text-black"
                >
                    <RotateCcw size={16} />
                    {buttonText}
                </button>
            )}

        </div>
    );
}

export default EmptyState;