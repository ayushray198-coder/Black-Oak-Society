import {
  CreditCard,
  Landmark,
  Smartphone,
  Wallet,
} from "lucide-react";

import useCheckout from "../../hooks/useCheckout";

const paymentOptions = [
  {
    id: "UPI",
    title: "UPI",
    description: "Google Pay • PhonePe • Paytm",
    icon: Smartphone,
  },
  {
    id: "Card",
    title: "Credit / Debit Card",
    description: "Visa • Mastercard • RuPay",
    icon: CreditCard,
  },
  {
    id: "Net Banking",
    title: "Net Banking",
    description: "SBI • HDFC • ICICI • Axis",
    icon: Landmark,
  },
  {
    id: "Cash on Delivery",
    title: "Cash on Delivery",
    description: "Pay after your order arrives",
    icon: Wallet,
  },
];

const PaymentMethod = () => {
  const { paymentMethod, setPaymentMethod } = useCheckout();

  return (
    <section className="rounded-2xl border border-[#C6A15B]/20 bg-[#111111]/80 p-6 backdrop-blur-xl">

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Payment Method
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Choose your preferred payment method.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {paymentOptions.map((option) => {
          const Icon = option.icon;

          const selected = paymentMethod === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setPaymentMethod(option.id)}
              className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300

              ${
                selected
                  ? "border-[#C6A15B] bg-gradient-to-br from-[#1a1a1a] to-[#111111] shadow-[0_0_25px_rgba(198,161,91,0.18)]"
                  : "border-white/10 bg-[#141414] hover:border-[#C6A15B]/40 hover:bg-[#181818]"
              }`}
            >
              <div className="flex items-start justify-between">

                <div className="flex items-center gap-4">

                  <div
                    className={`rounded-xl p-3 transition-all duration-300

                    ${
                      selected
                        ? "bg-[#C6A15B] text-black"
                        : "bg-white/5 text-[#C6A15B]"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      {option.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-zinc-400">
                      {option.description}
                    </p>
                  </div>

                </div>

                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border transition-all

                  ${
                    selected
                      ? "border-[#C6A15B]"
                      : "border-zinc-600"
                  }`}
                >
                  {selected && (
                    <div className="h-3 w-3 rounded-full bg-[#C6A15B]" />
                  )}
                </div>

              </div>

              {selected && (
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#C6A15B]" />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-xl border border-[#C6A15B]/15 bg-[#171717] p-4">
        <p className="text-xs leading-6 text-zinc-400">
          <span className="font-medium text-[#C6A15B]">
            Secure Payments:
          </span>{" "}
          Online payments are securely processed through Razorpay.
          Depending on your selection, you'll be able to complete payment
          using UPI, Cards or Net Banking in the next step.
        </p>
      </div>
    </section>
  );
};

export default PaymentMethod;