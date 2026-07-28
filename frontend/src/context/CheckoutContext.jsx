import { createContext, useContext, useMemo, useState } from "react";
import { placeOrder, getOrderById } from "../services/order.service";
import {
  createPaymentOrder,
  verifyPayment,
} from "../services/payment.service";
import loadRazorpay from "../utils/loadRazorpay";
import { useCart } from "./CartContext";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const [placingOrder, setPlacingOrder] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const [error, setError] = useState(null);


  const { clearCart } = useCart();

  // ======================================
  // Calculate Order Summary
  // ======================================

  const calculateSummary = (cartItems = []) => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );

    const shippingCharge = 100;
    const tax = subtotal * 0.18;
    const totalAmount = subtotal + shippingCharge + tax;

    return {
      subtotal,
      shippingCharge,
      tax,
      totalAmount,
    };
  };

  // ======================================
  // Main Checkout Handler
  // ======================================

  const handleCheckout = async ({
    cartItems,
    selectedAddress,
    navigate,
    buyNow = false,
  }) => {
    try {
      setError(null);
      setPlacingOrder(true);

      // -------------------------
      // Validation
      // -------------------------

      if (!selectedAddress) {
        throw new Error("Please select a shipping address.");
      }

      if (!cartItems || cartItems.length === 0) {
        throw new Error("Your cart is empty.");
      }

      // -------------------------
      // Prepare Items
      // -------------------------

      const items = cartItems.map((item) => ({
        product: item.product?._id || item.product,
        quantity: item.quantity,
      }));

      // -------------------------
      // Create Order
      // -------------------------

      const orderResponse = await placeOrder({
        items,
        shippingAddress: selectedAddress._id,
        paymentMethod,
      });

      const order = orderResponse.data;

      // -------------------------
      // COD Flow
      // -------------------------

      if (paymentMethod === "Cash on Delivery") {
        await clearCart();

        const latestOrderResponse = await getOrderById(order._id);

        navigate("/order-success", {
          replace: true,
          state: {
            order: latestOrderResponse.data,
          },
        });

        return;
      }

      // -------------------------
      // Online Payment Flow
      // -------------------------

      setPaymentLoading(true);
      const paymentResponse = await createPaymentOrder(order._id);

      const razorpayOrder = paymentResponse.data.razorpayOrder;
      // -------------------------
      // Load Razorpay SDK
      // -------------------------

      const razorpayLoaded = await loadRazorpay();

      if (!razorpayLoaded) {
        throw new Error(
          "Unable to load Razorpay. Please try again."
        );
      }

      // -------------------------
      // Razorpay Options
      // -------------------------

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,

        amount: razorpayOrder.amount,

        currency: razorpayOrder.currency,

        name: "Black Oak Society",

        description: "Luxury Spirits",

        order_id: razorpayOrder.id,

        method: {
          upi: paymentMethod === "UPI",
          card: paymentMethod === "Card",
          netbanking: paymentMethod === "Net Banking",
        },

        handler: async (response) => {
          try {
            await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (!buyNow) {
              await clearCart();
            }

            // Latest updated order fetch karo
            const latestOrderResponse = await getOrderById(order._id);

            navigate("/order-success", {
              replace: true,
              state: {
                order: latestOrderResponse.data,
              },
            });

          } catch (err) {
            setError(
              err.response?.data?.message ||
              "Payment verification failed."
            );
          }
        },

        modal: {
          ondismiss: () => {
            setError("Payment cancelled.");
          },
        },

        theme: {
          color: "#C6A15B",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();

    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        "Checkout failed."
      );
    } finally {
      setPlacingOrder(false);
      setPaymentLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      paymentMethod,
      setPaymentMethod,

      placingOrder,
      paymentLoading,

      error,
      setError,

      calculateSummary,

      handleCheckout,
    }),
    [
      paymentMethod,
      placingOrder,
      paymentLoading,
      error,
    ]
  );

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckoutContext = () =>
  useContext(CheckoutContext);