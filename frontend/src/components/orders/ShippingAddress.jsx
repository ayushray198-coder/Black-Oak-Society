import { MapPin } from "lucide-react";

function ShippingAddress({ address }) {
  if (!address) return null;

  const {
    fullName,
    phone,
    addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
    country,
  } = address;

  return (
    <section
      className="
        rounded-2xl
        border
        border-[#C6A15B]/15
        bg-[#111111]
        p-6
      "
    >
      {/* Heading */}

      <div className="mb-6 flex items-center gap-3">

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#C6A15B]/10
            text-[#C6A15B]
          "
        >
          <MapPin size={18} />
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">
            Shipping Address
          </h4>

          <p className="text-sm text-zinc-500 mt-1">
            Delivery destination
          </p>
        </div>

      </div>

      {/* Address */}

      <div className="space-y-3 text-sm">

        <div>
          <p className="font-medium text-white">
            {fullName}
          </p>

          <p className="mt-1 text-zinc-400">
            {phone}
          </p>
        </div>

        <div className="space-y-1 text-zinc-400">

          <p>{addressLine1}</p>

          {addressLine2 && (
            <p>{addressLine2}</p>
          )}

          <p>
            {city}, {state}
          </p>

          <p>
            {postalCode}
          </p>

          <p>{country}</p>

        </div>

      </div>
    </section>
  );
}

export default ShippingAddress;