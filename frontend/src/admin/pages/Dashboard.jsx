import { useEffect, useState } from "react";

import {
  getDashboard,
} from "../services/dashboardApi";

import AdminPageHeader from "../components/AdminPageHeader";
import AdminStatCard from "../components/AdminStatCard";
import AdminStatusCard from "../components/AdminStatusCard";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const response = await getDashboard();

      setDashboard(response.data);

      setError("");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Failed to load dashboard."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <h2 className="text-lg font-semibold">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <h2 className="text-red-500">
          {error}
        </h2>
      </div>
    );
  }

  return (
    <div>
      <AdminPageHeader
        title="Dashboard"
        subtitle="Monitor your store performance."
      />

      {/* Overview */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          title="Total Revenue"
          value={`₹${dashboard.overview.totalRevenue}`}
        />

        <AdminStatCard
          title="Total Orders"
          value={dashboard.overview.totalOrders}
        />

        <AdminStatCard
          title="Total Products"
          value={dashboard.overview.totalProducts}
        />

        <AdminStatCard
          title="Total Customers"
          value={dashboard.overview.totalCustomers}
        />
      </div>

      {/* Status */}

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <AdminStatusCard
          title="Order Status"
          data={dashboard.orders}
        />

        <AdminStatusCard
          title="Payment Status"
          data={dashboard.payments}
        />

        <AdminStatusCard
          title="Inventory"
          data={dashboard.inventory}
        />
      </div>
    </div>
  );
};

export default Dashboard;