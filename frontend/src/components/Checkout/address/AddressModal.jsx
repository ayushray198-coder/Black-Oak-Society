import { useState } from "react";

import AddressForm from "./AddressForm";

import useAddress from "../../../hooks/useAddress";

const AddressModal = ({
  isOpen,
  onClose,
  isEditMode = false,
  initialValues = null,
  onSuccess,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { createAddress, editAddress } = useAddress();

  if (!isOpen) return null;

  const handleSubmit = async (formData) => {
    try {
      setIsSubmitting(true);

      if (isEditMode) {
        await editAddress(initialValues._id, formData);
      } else {
        await createAddress(formData);
      }

      if (onSuccess) {
        await onSuccess();
      }

      onClose();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-4xl rounded-2xl border border-neutral-800 bg-[#111111] shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-5">

          <div>
            <h2 className="text-xl font-semibold text-white">
              {isEditMode
                ? "Edit Address"
                : "Add New Address"}
            </h2>

            <p className="mt-1 text-sm text-neutral-400">
              Enter your shipping details.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-neutral-400 transition hover:text-white"
          >
            ×
          </button>

        </div>

        {/* Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6">
          <AddressForm
            initialValues={initialValues}
            isSubmitting={isSubmitting}
            isEditMode={isEditMode}
            onCancel={onClose}
            onSubmit={handleSubmit}
          />
        </div>

      </div>
    </div>
  );
};

export default AddressModal;