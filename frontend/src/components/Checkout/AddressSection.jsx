import { useState } from "react";
import {
  Home,
  Building2,
  MapPin,
  Pencil,
  Trash2,
  Check,
} from "lucide-react";

import useAddress from "../../hooks/useAddress";
import AddressModal from "./address/AddressModal";

const AddressSection = () => {
  const {
    addresses,
    selectedAddress,
    setSelectedAddress,
    loading,
    removeAddress,
    fetchAddresses,
  } = useAddress();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditMode, setIsEditMode] =
    useState(false);

  const [editingAddress, setEditingAddress] =
    useState(null);

  const openAddModal = () => {
    setEditingAddress(null);
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const openEditModal = (address) => {
    setEditingAddress(address);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingAddress(null);
    setIsEditMode(false);
    setIsModalOpen(false);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this address?"
    );

    if (!confirmDelete) return;

    await removeAddress(id);
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm text-zinc-400">
          Loading addresses...
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="rounded-2xl border border-[#C6A15B]/20 bg-[#111111]/80 p-5 backdrop-blur-xl">

        {/* Header */}

        <div className="mb-5 flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-white">
              Shipping Address
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
              Choose where you want your order delivered.
            </p>
          </div>

          <button
            onClick={openAddModal}
            className="rounded-lg border border-[#C6A15B] px-4 py-2 text-sm text-[#C6A15B] transition hover:bg-[#C6A15B] hover:text-black"
          >
            + Add New
          </button>

        </div>

        {/* Empty State */}

        {addresses.length === 0 && (
          <div className="rounded-xl border border-dashed border-zinc-700 p-8 text-center">

            <MapPin
              size={32}
              className="mx-auto mb-3 text-zinc-500"
            />

            <p className="text-zinc-300">
              No address added yet.
            </p>

          </div>
        )}

        {/* Address List */}

        <div className="space-y-4">

          {addresses.map((address) => {

            const isSelected =
              selectedAddress?._id === address._id;

            return (
              <div
                key={address._id}
                onClick={() =>
                  setSelectedAddress(address)
                }
                className={`cursor-pointer rounded-xl border p-4 transition-all duration-300

                ${
                  isSelected
                    ? "border-[#C6A15B] bg-[#181818]"
                    : "border-white/10 bg-[#141414] hover:border-[#C6A15B]/40"
                }`}
              >


                                <div className="flex items-start justify-between gap-4">

                  {/* Left Side */}

                  <div className="flex gap-3">

                    <div className="mt-1">
                      {address.addressType === "Office" ? (
                        <Building2
                          size={20}
                          className="text-[#C6A15B]"
                        />
                      ) : (
                        <Home
                          size={20}
                          className="text-[#C6A15B]"
                        />
                      )}
                    </div>

                    <div>

                      <div className="flex flex-wrap items-center gap-2">

                        <h3 className="font-medium text-white">
                          {address.fullName}
                        </h3>

                        {address.isDefault && (
                          <span className="rounded-full bg-[#C6A15B]/20 px-2 py-1 text-xs text-[#C6A15B]">
                            Default
                          </span>
                        )}

                      </div>

                      <p className="mt-2 text-sm text-zinc-400">
                        {address.addressLine1}
                        {address.addressLine2 &&
                          `, ${address.addressLine2}`}
                      </p>

                      <p className="text-sm text-zinc-400">
                        {address.city}, {address.state} -{" "}
                        {address.postalCode}
                      </p>

                      <p className="mt-1 text-sm text-zinc-500">
                        {address.mobile}
                      </p>

                    </div>

                  </div>

                  {/* Right Side */}

                  <div className="flex items-center gap-2">

                    {isSelected && (
                      <div className="rounded-full bg-[#C6A15B] p-1">

                        <Check
                          size={14}
                          className="text-black"
                        />

                      </div>
                    )}

                    {/* Edit */}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openEditModal(address);
                      }}
                      className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
                    >
                      <Pencil size={16} />
                    </button>

                    {/* Delete */}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(address._id);
                      }}
                      className="rounded-lg p-2 text-zinc-400 transition hover:bg-red-500/10 hover:text-red-400"
                    >
                      <Trash2 size={16} />
                    </button>

                  </div>

                </div>

              </div>

            );
          })}

        </div>

      </section>



            {/* Address Modal */}

      <AddressModal
        isOpen={isModalOpen}
        onClose={closeModal}
        isEditMode={isEditMode}
        initialValues={editingAddress}
        onSuccess={fetchAddresses}
      />
    </>
  );
};

export default AddressSection;