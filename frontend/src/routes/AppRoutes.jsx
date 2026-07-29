import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../admin/layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

/* User Pages */
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import CartPage from "../pages/Cart/CartPage";
import WishlistPage from "../pages/Wishlist/WishlistPage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
import MyOrders from "../pages/MyOrders/MyOrders";
import OrderDetails from "../pages/OrderDetails/OrderDetails";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import NotFound from "../pages/NotFound/NotFound";

/* Auth */
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import VerifyOTP from "../components/auth/VerifyOTP";
import ForgotPassword from "../components/auth/ForgotPassword";
import ResetPassword from "../components/auth/ResetPassword";

/* Admin */
import Dashboard from "../admin/pages/Dashboard";
import Products from "../admin/pages/Products";
import Brands from "../admin/pages/Brands";
import Categories from "../admin/pages/Categories";
import Orders from "../admin/pages/Orders";
import Customers from "../admin/pages/Customers";
import Payments from "../admin/pages/Payments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "shop",
        element: <Shop />,
      },

      {
        path: "products/:id",
        element: <ProductDetails />,
      },

      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "wishlist",
            element: <WishlistPage />,
          },

          {
            path: "cart",
            element: <CartPage />,
          },

          {
            path: "checkout",
            element: <CheckoutPage />,
          },

          {
            path: "order-success",
            element: <OrderSuccess />,
          },

          {
            path: "orders",
            element: <MyOrders />,
          },

          {
            path: "settings",
            element: <Settings />,
          },

          {
            path: "profile",
            element: <Profile />,
          },

          {
            path: "orders/:id",
            element: <OrderDetails />,
          },
        ],
      },
    ],
  },

  /* Authentication */

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/verify-otp",
    element: <VerifyOTP />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/reset-password",
    element: <ResetPassword />,
  },

  /* Admin */

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },

          {
            path: "products",
            element: <Products />,
          },

          {
            path: "brands",
            element: <Brands />,
          },

          {
            path: "categories",
            element: <Categories />,
          },

          {
            path: "orders",
            element: <Orders />,
          },

          {
            path: "customers",
            element: <Customers />,
          },

          {
            path: "payments",
            element: <Payments />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;