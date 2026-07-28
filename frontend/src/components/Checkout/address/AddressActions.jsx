const AddressActions = ({
  isSubmitting = false,
  isEditMode = false,
  onCancel,
}) => {
  return (
    <div className="flex flex-col-reverse gap-3 border-t border-neutral-800 pt-6 sm:flex-row sm:justify-end">
      {/* Cancel Button */}
      <button
        type="button"
        onClick={onCancel}
        disabled={isSubmitting}
        className="
          rounded-xl
          border
          border-neutral-700
          bg-transparent
          px-6
          py-3
          text-sm
          font-medium
          text-neutral-300
          transition-all
          duration-300
          hover:border-neutral-500
          hover:bg-neutral-900
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        Cancel
      </button>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="
          rounded-xl
          bg-[#C6A15B]
          px-6
          py-3
          text-sm
          font-semibold
          text-black
          transition-all
          duration-300
          hover:opacity-90
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {isSubmitting
          ? isEditMode
            ? "Updating..."
            : "Saving..."
          : isEditMode
          ? "Update Address"
          : "Save Address"}
      </button>
    </div>
  );
};

export default AddressActions;