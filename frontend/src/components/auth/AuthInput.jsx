import { forwardRef } from "react";

const AuthInput = forwardRef(
  (
    {
      label,
      type = "text",
      name,
      value,
      onChange,
      placeholder,
      error,
      required = false,
      autoComplete,
      icon,
      disabled = false,
    },
    ref
  ) => {
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
            flex items-center gap-3
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
          {icon && (
            <span className="text-[#D8B46A]">
              {icon}
            </span>
          )}

          <input
            ref={ref}
            id={name}
            name={name}
            type={type}
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
        </div>

        {error && (
          <p className="text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";

export default AuthInput;