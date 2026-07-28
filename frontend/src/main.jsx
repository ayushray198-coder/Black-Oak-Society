import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { AuthProvider } from "./context/AuthContext";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import { AddressProvider } from "./context/AddressContext";


import "./index.css";
import "./styles/global.css";
import { CheckoutProvider } from "./context/CheckoutContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <AddressProvider>
            <CheckoutProvider>
              <App />
            </CheckoutProvider>
          </AddressProvider>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  </StrictMode>
);