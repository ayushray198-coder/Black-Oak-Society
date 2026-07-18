import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="min-h-screen bg-background text-text">
      <Outlet />
    </main>
  );
};

export default MainLayout;