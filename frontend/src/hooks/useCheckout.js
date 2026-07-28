import { useCheckoutContext } from "../context/CheckoutContext";

const useCheckout = () => {
  return useCheckoutContext();
};

export default useCheckout;