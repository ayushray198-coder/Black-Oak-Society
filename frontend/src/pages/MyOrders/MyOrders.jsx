import { useEffect, useState } from "react";

import { getMyOrders } from "../../services/order.service";

import OrderCard from "../../components/orders/OrderCard";
import OrdersSkeleton from "../../components/orders/OrdersSkeleton";
import EmptyOrders from "../../components/orders/EmptyOrders";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getMyOrders();

      setOrders(response.data || []);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to load your orders."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-5 py-32">
        <OrdersSkeleton />
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-5 py-32">
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5 text-center text-red-400">
          {error}
        </div>
      </main>
    );
  }

  if (orders.length === 0) {
    return (
      <main className="mx-auto max-w-7xl px-5 py-32">
        <EmptyOrders />
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-28">
      {/* Heading */}

      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#C6A15B]">
          Orders
        </p>

        <h1 className="mt-3 text-4xl font-bold text-white">
          My Orders
        </h1>

        <p className="mt-3 text-zinc-400">
          Track your purchases and review your previous luxury
          orders.
        </p>
      </div>

      {/* Orders */}

      <div className="space-y-6">
        {orders.map((order) => (
          <OrderCard
            key={order._id}
            order={order}
          />
        ))}
      </div>
    </main>
  );
}

export default MyOrders;