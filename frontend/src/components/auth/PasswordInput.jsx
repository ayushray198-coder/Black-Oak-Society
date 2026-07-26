import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  placeholder = "Enter your password",
  error,
  required = false,
  autoComplete = "current-password",
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium tracking-wide text-white/80"
      >
        {label}
        {required && <span className="ml-1 text-[#D8B46A]">*</span>}
      </label>

      <div
        className={`
          flex items-center
          rounded-2xl
          border
          bg-white/[0.04]
          px-4
          py-4
          backdrop-blur-xl
          transition-all
          duration-300
          ${
            error
              ? "border-red-500"
              : "border-[#D8B46A]/15 focus-within:border-[#D8B46A] focus-within:shadow-[0_0_20px_rgba(216,180,106,0.15)]"
          }
        `}
      >
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          disabled={disabled}
          className="
            w-full
            bg-transparent
            text-white
            placeholder:text-white/35
            outline-none
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="
            ml-3
            text-[#D8B46A]
            transition
            hover:text-white
          "
          aria-label={
            showPassword ? "Hide password" : "Show password"
          }
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;