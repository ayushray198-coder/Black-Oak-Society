import CheckoutHeader from "../../components/Checkout/CheckoutHeader";
import AddressSection from "../../components/Checkout/AddressSection";
import PaymentMethod from "../../components/Checkout/PaymentMethod";
import OrderSummary from "../../components/Checkout/OrderSummary";
import PlaceOrderButton from "../../components/Checkout/PlaceOrderButton";

import useCheckout from "../../hooks/useCheckout";

const CheckoutPage = () => {
    const {
        placingOrder,
        paymentLoading,
        handleCheckout,
        error,
    } = useCheckout();

    return (
        <main className="min-h-screen bg-black px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                <CheckoutHeader />

                {error && (
                    <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                        {error}
                    </div>
                )}

                <div className="mt-8 grid gap-6 lg:grid-cols-[1.7fr_1fr]">

                    <div className="space-y-6">
                        <AddressSection />
                        <PaymentMethod />
                    </div>

                    <div className="sticky top-24 h-fit space-y-6">
                        <OrderSummary />

                        <PlaceOrderButton
                            loading={placingOrder || paymentLoading}
                            onPlaceOrder={handleCheckout}
                        />
                    </div>

                </div>
            </div>
        </main>
    );
};

export default CheckoutPage;