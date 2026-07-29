const AdminStatusCard = ({ title, data }) => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <h2 className="mb-5 text-lg font-semibold text-white">
        {title}
      </h2>

      <div className="space-y-3">
        {Object.entries(data).map(([key, value]) => (
          <div
            key={key}
            className="flex items-center justify-between border-b border-zinc-800 pb-2 last:border-none last:pb-0"
          >
            <span className="capitalize text-zinc-400">
              {key.replace(/([A-Z])/g, " $1")}
            </span>

            <span className="font-semibold text-white">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminStatusCard;