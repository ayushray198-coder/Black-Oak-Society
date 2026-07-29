const AdminPageHeader = ({ title, subtitle, children }) => {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-zinc-800 pb-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="text-3xl font-bold tracking-wide text-white">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            {subtitle}
          </p>
        )}
      </div>

      {children && (
        <div className="flex items-center gap-3">
          {children}
        </div>
      )}
    </div>
  );
};

export default AdminPageHeader;