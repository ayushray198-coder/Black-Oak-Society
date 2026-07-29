import {
  Clock3,
  CheckCircle2,
  Truck,
  PackageCheck,
  Ban,
  CreditCard,
  Wallet,
  RotateCcw,
  Boxes,
} from "lucide-react";

const icons = {
  Pending: Clock3,
  Confirmed: CheckCircle2,
  Processing: PackageCheck,
  Shipped: Truck,
  Delivered: PackageCheck,
  Cancelled: Ban,
  Paid: CreditCard,
  Failed: Wallet,
  Refunded: RotateCcw,
  "Low Stock Products": Boxes,
};

const AdminStatusCard = ({ title, value }) => {
  const Icon = icons[title];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/10">
      {/* Decorative Glow */}
      <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-amber-500/5 blur-3xl transition group-hover:bg-amber-500/10" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
            {title}
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white">
            {value}
          </h2>

          <div className="mt-5 flex items-center gap-2">
            <div className="h-[2px] w-10 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-16" />
            <span className="text-xs text-zinc-500">
              Live Status
            </span>
          </div>
        </div>

        {Icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400 transition-all duration-300 group-hover:scale-110 group-hover:border-amber-500/40">
            <Icon size={20} strokeWidth={2} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminStatusCard;