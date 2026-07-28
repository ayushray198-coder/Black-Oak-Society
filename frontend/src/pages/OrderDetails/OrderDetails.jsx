import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import {
  cancelOrder,
  getOrderById,
} from "../../services/order.service";

import OrderItem from "../../components/orders/OrderItem";
import OrderStatusBadge from "../../components/orders/OrderStatusBadge";
import ShippingAddress from "../../components/orders/ShippingAddress";
import PaymentDetails from "../../components/orders/PaymentDetails";
import OrderPricing from "../../components/orders/OrderPricing";

function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cancelling, setCancelling] = useState(false);

  const fetchOrder = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getOrderById(id);

      setOrder(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to load order details."
      );
    } finally {
      setLoading(false);
    }
  };




  

  useEffect(() => {
    fetchOrder();
  }, [id]);

  const handleCancelOrder = async () => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (!confirmCancel) return;

    try {
      setCancelling(true);

      await cancelOrder(id);

      fetchOrder();
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Unable to cancel order."
      );
    } finally {
      setCancelling(false);
    }
  };

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-5 py-32">
        <p className="text-center text-zinc-400">
          Loading order...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-5 py-32">
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-center text-red-400">
          {error}
        </div>
      </main>
    );
  }

  if (!order) return null;

  return (
    <main className="mx-auto max-w-7xl px-5 py-24">

      {/* Back */}

      <button
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center gap-2 text-sm text-zinc-400 transition hover:text-[#C6A15B]"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      {/* Header */}

      <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#C6A15B]">
            Order
          </p>

          <h1 className="mt-2 text-3xl font-bold text-white">
            #{order.orderNumber || order._id}
          </h1>

          <p className="mt-3 text-zinc-400">
            {new Date(order.createdAt).toLocaleString("en-IN", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </p>
        </div>

        <OrderStatusBadge status={order.orderStatus} />

      </div>

      {/* Content */}

      <div className="grid gap-8 lg:grid-cols-3">

        {/* Left */}

        <div className="space-y-6 lg:col-span-2">

          <section className="rounded-2xl border border-[#C6A15B]/15 bg-[#111111] p-6">

            <h2 className="mb-6 text-xl font-semibold text-white">
              Ordered Items
            </h2>

            <div className="space-y-5">
              {order.items?.map((item) => (
                <OrderItem
                  key={item._id}
                  item={item}
                />
              ))}
            </div>

          </section>

        </div>

        {/* Right */}

        <div className="space-y-6">

          <ShippingAddress
            address={order.shippingAddress}
          />

          <PaymentDetails
            paymentMethod={order.paymentMethod}
            paymentStatus={order.paymentStatus}
            paymentId={order.paymentId}
            paidAt={order.paidAt}
          />

          <OrderPricing order={order} />

          {["Pending", "Processing"].includes(
            order.orderStatus
          ) && (
            <button
              onClick={handleCancelOrder}
              disabled={cancelling}
              className="
                w-full
                rounded-xl
                border
                border-red-500/20
                bg-red-500/10
                py-3
                font-medium
                text-red-400
                transition
                hover:bg-red-500/20
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {cancelling
                ? "Cancelling..."
                : "Cancel Order"}
            </button>
          )}

          <Link
            to="/products"
            className="
              block
              rounded-xl
              border
              border-[#C6A15B]/20
              py-3
              text-center
              font-medium
              text-[#C6A15B]
              transition
              hover:bg-[#C6A15B]/10
            "
          >
            Continue Shopping
          </Link>

        </div>

      </div>

    </main>
  );
}

export default OrderDetails;