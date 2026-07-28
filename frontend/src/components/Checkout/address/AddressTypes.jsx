const ADDRESS_TYPES = [
  {
    label: "Home",
    value: "Home",
  },
  {
    label: "Office",
    value: "Office",
  },
  {
    label: "Other",
    value: "Other",
  },
];

const AddressTypes = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-neutral-300">
        Address Type
      </label>

      <div className="flex flex-wrap gap-3">
        {ADDRESS_TYPES.map((type) => {
          const active = value === type.value;

          return (
            <button
              key={type.value}
              type="button"
              onClick={() => onChange(type.value)}
              className={`
                rounded-xl
                border
                px-5
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-300

                ${
                  active
                    ? "border-[#C6A15B] bg-[#C6A15B] text-black"
                    : "border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-[#C6A15B]"
                }
              `}
            >
              {type.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AddressTypes;