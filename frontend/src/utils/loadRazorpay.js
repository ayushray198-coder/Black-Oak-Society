const RAZORPAY_SCRIPT =
  "https://checkout.razorpay.com/v1/checkout.js";

const loadRazorpay = () => {
  return new Promise((resolve) => {
    // Already Loaded
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    // Check Existing Script
    const existingScript = document.querySelector(
      `script[src="${RAZORPAY_SCRIPT}"]`
    );

    if (existingScript) {
      existingScript.onload = () => resolve(true);
      existingScript.onerror = () => resolve(false);
      return;
    }

    // Create Script
    const script = document.createElement("script");

    script.src = RAZORPAY_SCRIPT;
    script.async = true;

    script.onload = () => resolve(true);

    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
};

export default loadRazorpay;