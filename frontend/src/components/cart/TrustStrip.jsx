const TrustStrip = () => {
  const items = [
    {
      title: "Authenticity Guaranteed",
      text: "Every bottle is sourced from trusted distributors.",
    },
    {
      title: "Secure Payments",
      text: "Industry-standard encrypted payment protection.",
    },
    {
      title: "Premium Packaging",
      text: "Luxury presentation with secure packaging.",
    },
    {
      title: "Fast Delivery",
      text: "Reliable shipping with order tracking.",
    },
  ];

  return (
    <section className="mt-20">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-amber-400/15 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-400/35"
          >
            <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />

            <h3 className="text-xl font-medium text-white">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/55">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
