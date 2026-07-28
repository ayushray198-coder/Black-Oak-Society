import { Loader2, LockKeyhole } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import useCart from "../../hooks/useCart";
import useAddress from "../../hooks/useAddress";

const PlaceOrderButton = ({
  loading,
  onPlaceOrder,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { cart = [] } = useCart();
  const { selectedAddress } = useAddress();

  // Buy Now Item
  const buyNowItem = location.state?.buyNowItem;

  const handleClick = () => {
    onPlaceOrder({
      cartItems: buyNowItem ? [buyNowItem] : cart,
      selectedAddress,
      navigate,
      buyNow: !!buyNowItem,
    });
  };

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="
          flex
          h-12
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-[#C6A15B]
          font-semibold
          text-black
          transition-all
          duration-300
          hover:scale-[1.01]
          hover:brightness-110
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading ? (
          <>
            <Loader2
              size={18}
              className="animate-spin"
            />
            Processing...
          </>
        ) : (
          <>
            <LockKeyhole size={18} />
            Place Order
          </>
        )}
      </button>

      <div className="rounded-xl border border-[#C6A15B]/15 bg-[#141414] p-4">
        <p className="text-center text-xs leading-6 text-zinc-400">
          Your payment is secured by{" "}
          <span className="font-medium text-[#C6A15B]">
            Razorpay
          </span>
          . Your personal information is encrypted and
          processed securely.
        </p>
      </div>
    </div>
  );
};

export default PlaceOrderButton;