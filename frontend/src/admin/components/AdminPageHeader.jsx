const AdminPageHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-white">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-2 text-sm text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default AdminPageHeader;