import { useEffect } from "react";
import { useForm } from "react-hook-form";

import AddressInput from "./AddressInput";
import AddressTypes from "./AddressTypes";
import AddressActions from "./AddressActions";

const defaultValues = {
  fullName: "",
  mobile: "",
  alternateMobile: "",
  addressLine1: "",
  addressLine2: "",
  landmark: "",
  city: "",
  state: "",
  country: "India",
  postalCode: "",
  addressType: "Home",
  isDefault: false,
};

const AddressForm = ({
  initialValues = null,
  isSubmitting = false,
  isEditMode = false,
  onCancel,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (initialValues) {
      reset({
        ...defaultValues,
        ...initialValues,
      });
    } else {
      reset(defaultValues);
    }
  }, [initialValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Basic Details */}

      <div className="grid gap-5 md:grid-cols-2">
        <AddressInput
          label="Full Name"
          name="fullName"
          placeholder="Enter full name"
          register={register}
          error={errors.fullName}
          required
        />

        <AddressInput
          label="Mobile Number"
          name="mobile"
          placeholder="Enter mobile number"
          register={register}
          error={errors.mobile}
          required
        />

        <AddressInput
          label="Alternate Mobile"
          name="alternateMobile"
          placeholder="Optional"
          register={register}
          error={errors.alternateMobile}
        />

        <AddressInput
          label="Landmark"
          name="landmark"
          placeholder="Nearby landmark"
          register={register}
          error={errors.landmark}
        />
      </div>

      {/* Address */}

      <div className="space-y-5">
        <AddressInput
          label="Address Line 1"
          name="addressLine1"
          placeholder="House No, Street..."
          register={register}
          error={errors.addressLine1}
          required
        />

        <AddressInput
          label="Address Line 2"
          name="addressLine2"
          placeholder="Apartment, Floor..."
          register={register}
          error={errors.addressLine2}
        />
      </div>

      {/* Location */}

      <div className="grid gap-5 md:grid-cols-2">
        <AddressInput
          label="City"
          name="city"
          placeholder="City"
          register={register}
          error={errors.city}
          required
        />

        <AddressInput
          label="State"
          name="state"
          placeholder="State"
          register={register}
          error={errors.state}
          required
        />

        <AddressInput
          label="Country"
          name="country"
          placeholder="Country"
          register={register}
          error={errors.country}
          required
        />

        <AddressInput
          label="Postal Code"
          name="postalCode"
          placeholder="Postal Code"
          register={register}
          error={errors.postalCode}
          required
        />
      </div>

      {/* Address Type */}

      <AddressTypes
        value={watch("addressType")}
        onChange={(value) =>
          setValue("addressType", value)
        }
      />

      {/* Default Address */}

      <label className="flex items-center gap-3 text-sm text-neutral-300">
        <input
          type="checkbox"
          {...register("isDefault")}
          className="h-4 w-4 accent-[#C6A15B]"
        />

        Set as default address
      </label>

      {/* Footer */}

      <AddressActions
        isSubmitting={isSubmitting}
        isEditMode={isEditMode}
        onCancel={onCancel}
      />
    </form>
  );
};

export default AddressForm;