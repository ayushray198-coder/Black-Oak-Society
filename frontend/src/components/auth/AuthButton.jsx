import { LoaderCircle } from "lucide-react";

const AuthButton = ({
  children,
  type = "submit",
  loading = false,
  disabled = false,
  fullWidth = true,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[#D8B46A]/20
        bg-[#D8B46A]
        px-8
        py-4
        font-semibold
        tracking-wide
        text-black
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_15px_40px_rgba(216,180,106,0.35)]
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${fullWidth ? "w-full" : ""}
      `}
    >
      {/* Shine Effect */}
      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/25
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />

      <span className="relative flex items-center justify-center gap-3">
        {loading && (
          <LoaderCircle
            size={20}
            className="animate-spin"
          />
        )}

        {children}
      </span>
    </button>
  );
};

export default AuthButton;