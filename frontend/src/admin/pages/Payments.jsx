import { useEffect, useState } from "react";

import AdminPageHeader from "../components/AdminPageHeader";
import EntityModal from "../components/EntityModal";

import {
  getAllPayments,
  updatePaymentStatus,
} from "../services/paymentApi";

const paymentStatuses = [
  "pending",
  "paid",
  "failed",
  "refunded",
];

const Payments = () => {
  const [payments, setPayments] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [selectedPayment, setSelectedPayment] =
    useState(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [status, setStatus] =
    useState("pending");

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      setLoading(true);

      const response =
        await getAllPayments();

      setPayments(
        response.data || []
      );

      setError("");
    } catch (err) {
      console.error(err);

      setError(
        err?.response?.data?.message ||
          "Failed to fetch payments."
      );
    } finally {
      setLoading(false);
    }
  };

  const openStatusModal = (payment) => {
    setSelectedPayment(payment);

    setStatus(payment.paymentStatus);

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPayment(null);

    setStatus("pending");

    setIsModalOpen(false);
  };



    const handleUpdateStatus = async (e) => {
    e.preventDefault();

    try {
      await updatePaymentStatus(
        selectedPayment._id,
        {
          paymentStatus: status,
        }
      );

      closeModal();

      fetchPayments();
    } catch (err) {
      console.error(err);

      alert(
        err?.response?.data?.message ||
          "Failed to update payment."
      );
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <h2 className="text-lg font-semibold text-white">
          Loading Payments...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <h2 className="text-red-500">
          {error}
        </h2>
      </div>
    );
  }

  return (
    <>
      <AdminPageHeader
        title="Payments"
        subtitle="Manage customer payments."
      />

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        <table className="w-full">
          <thead className="border-b border-zinc-800 bg-zinc-950">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                Payment ID
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                Customer
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                Amount
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                Method
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                Status
              </th>

              <th className="px-6 py-4 text-right text-sm font-medium text-zinc-400">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {payments.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-12 text-center text-zinc-500"
                >
                  No payments found.
                </td>
              </tr>
            ) : (
              payments.map((payment) => (
                <tr
                  key={payment._id}
                  className="border-b border-zinc-800 transition hover:bg-zinc-800/40 last:border-none"
                >
                  <td className="px-6 py-4 font-medium text-white">
                    #{payment._id.slice(-6)}
                  </td>

                  <td className="px-6 py-4 text-zinc-300">
                    {payment.user?.name || "N/A"}
                  </td>

                  <td className="px-6 py-4 font-medium text-amber-400">
                    ₹{payment.amount}
                  </td>

                  <td className="px-6 py-4 text-zinc-400 capitalize">
                    {payment.paymentMethod}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-lg border border-amber-500/30 px-3 py-1 text-xs uppercase tracking-wide text-amber-400">
                      {payment.paymentStatus}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end">
                      <button
                        onClick={() =>
                          openStatusModal(payment)
                        }
                        className="rounded-lg border border-amber-500/30 px-4 py-2 text-sm font-medium text-amber-400 transition hover:bg-amber-500/10"
                      >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <EntityModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Update Payment Status"
      >
        <form
          onSubmit={handleUpdateStatus}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Payment Status
            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-amber-400"
            >
              {paymentStatuses.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-amber-400 py-3 font-semibold text-black transition hover:bg-amber-300"
          >
            Update Payment Status
          </button>
        </form>
      </EntityModal>
    </>
  );
};

export default Payments;