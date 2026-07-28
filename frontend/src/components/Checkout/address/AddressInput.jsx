import React from "react";

const AddressInput = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  required = false,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {/* Label */}
      <label
        htmlFor={name}
        className="text-sm font-medium text-neutral-300"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      {/* Input */}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
        className={`
          w-full
          rounded-xl
          border
          bg-neutral-900
          px-4
          py-3
          text-sm
          text-white
          outline-none
          transition-all
          duration-300
          placeholder:text-neutral-500

          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-neutral-700 focus:border-[#C6A15B]"
          }

          ${
            disabled
              ? "cursor-not-allowed opacity-60"
              : ""
          }
        `}
      />

      {/* Error */}
      {error && (
        <p className="text-xs text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default AddressInput;