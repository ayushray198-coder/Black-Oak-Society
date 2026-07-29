import {
  LayoutDashboard,
  Package,
  BadgePercent,
  Grid2x2,
  ShoppingCart,
  Users,
  CreditCard,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
    end: true,
  },
  {
    name: "Products",
    path: "/admin/products",
    icon: Package,
  },
  {
    name: "Brands",
    path: "/admin/brands",
    icon: BadgePercent,
  },
  {
    name: "Categories",
    path: "/admin/categories",
    icon: Grid2x2,
  },
  {
    name: "Orders",
    path: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    name: "Customers",
    path: "/admin/customers",
    icon: Users,
  },
  {
    name: "Payments",
    path: "/admin/payments",
    icon: CreditCard,
  },
];

const AdminSidebar = () => {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-zinc-800 bg-black">
      {/* Logo */}

      <div className="border-b border-zinc-800 px-8 py-7">
        <h4 className="text-2xl font-bold tracking-widest text-amber-400">
          BLACK OAK
        </h4>

        <p className="mt-1 text-xs uppercase tracking-[0.35em] text-zinc-500">
          Admin Panel
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 px-4 py-6">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border border-amber-500/40 bg-zinc-900 text-amber-400"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`
              }
            >
              <Icon size={19} />

              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}

      <div className="border-t border-zinc-800 px-6 py-5">
        <p className="text-xs text-zinc-500">
          Black Oak Society
        </p>

        <p className="mt-1 text-xs text-zinc-600">
          Luxury Admin Dashboard
        </p>
      </div>
    </aside>
  );
};

export default AdminSidebar;