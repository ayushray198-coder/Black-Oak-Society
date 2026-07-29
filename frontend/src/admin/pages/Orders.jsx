import { useEffect, useState } from "react";

import AdminPageHeader from "../components/AdminPageHeader";
import EntityModal from "../components/EntityModal";

import {
  getAllOrders,
  updateOrderStatus,
} from "../services/orderApi";

const orderStatuses = [
  "pending",
  "confirmed",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
];

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [selectedOrder, setSelectedOrder] =
    useState(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [status, setStatus] =
    useState("pending");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);

      const response =
        await getAllOrders();

      setOrders(
        response.data || []
      );

      setError("");
    } catch (err) {
      console.error(err);

      setError(
        err?.response?.data?.message ||
          "Failed to fetch orders."
      );
    } finally {
      setLoading(false);
    }
  };

  const openStatusModal = (order) => {
    setSelectedOrder(order);

    setStatus(order.orderStatus);

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);

    setStatus("pending");

    setIsModalOpen(false);
  };


    const handleUpdateStatus = async (e) => {
    e.preventDefault();

    try {
      await updateOrderStatus(
        selectedOrder._id,
        {
          orderStatus: status,
        }
      );

      closeModal();

      fetchOrders();
    } catch (err) {
      console.error(err);

      alert(
        err?.response?.data?.message ||
          "Failed to update order."
      );
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <h2 className="text-lg font-semibold text-white">
          Loading Orders...
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
        title="Orders"
        subtitle="Manage customer orders."
      />

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        <table className="w-full">
          <thead className="border-b border-zinc-800 bg-zinc-950">
            <tr>
              <th className="px-6 py-4 text-left text-sm text-zinc-400">
                Order ID
              </th>

              <th className="px-6 py-4 text-left text-sm text-zinc-400">
                Customer
              </th>

              <th className="px-6 py-4 text-left text-sm text-zinc-400">
                Total
              </th>

              <th className="px-6 py-4 text-left text-sm text-zinc-400">
                Status
              </th>

              <th className="px-6 py-4 text-right text-sm text-zinc-400">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-12 text-center text-zinc-500"
                >
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b border-zinc-800 transition hover:bg-zinc-800/40 last:border-none"
                >
                  <td className="px-6 py-4 font-medium text-white">
                    #{order._id.slice(-6)}
                  </td>

                  <td className="px-6 py-4 text-zinc-300">
                    {order.user?.name || "N/A"}
                  </td>

                  <td className="px-6 py-4 font-medium text-amber-400">
                    ₹{order.totalAmount}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-lg border border-amber-500/30 px-3 py-1 text-xs uppercase tracking-wide text-amber-400">
                      {order.orderStatus}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end">
                      <button
                        onClick={() =>
                          openStatusModal(order)
                        }
                        className="rounded-lg border border-amber-500/30 px-4 py-2 text-sm text-amber-400 transition hover:bg-amber-500/10"
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
        title="Update Order Status"
      >
        <form
          onSubmit={handleUpdateStatus}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Order Status
            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-amber-400"
            >
              {orderStatuses.map((item) => (
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
            Update Status
          </button>
        </form>
      </EntityModal>
    </>
  );
};

export default Orders;