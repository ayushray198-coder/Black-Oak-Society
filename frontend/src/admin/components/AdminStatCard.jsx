import {
  Package,
  ShoppingCart,
  Users,
  IndianRupee,
} from "lucide-react";

const iconMap = {
  "Total Revenue": IndianRupee,
  "Total Orders": ShoppingCart,
  "Total Products": Package,
  "Total Customers": Users,
};

const AdminStatCard = ({ title, value }) => {
  const Icon = iconMap[title];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            {title}
          </p>
        </div>

        {Icon && (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400 transition group-hover:border-amber-500/40 group-hover:bg-amber-500/15">
            <Icon size={20} />
          </div>
        )}
      </div>

      {/* Value */}
      <h2 className="mt-6 text-4xl font-bold tracking-tight text-white">
        {value}
      </h2>

      {/* Bottom Accent */}
      <div className="mt-6 h-px w-full bg-gradient-to-r from-amber-500/40 via-zinc-700 to-transparent" />
    </div>
  );
};

export default AdminStatCard;