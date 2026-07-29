import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-black text-white">
      <AdminSidebar />

      <main className="flex-1 overflow-y-auto bg-black">
        <div className="min-h-full p-8 lg:p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;