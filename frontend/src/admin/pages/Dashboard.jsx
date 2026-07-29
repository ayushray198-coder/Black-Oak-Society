import { useEffect, useState } from "react";

import AdminPageHeader from "../components/AdminPageHeader";
import AdminStatCard from "../components/AdminStatCard";
import AdminStatusCard from "../components/AdminStatusCard";

import { getDashboard } from "../services/dashboardApi";

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
      console.error(err);

      setError(
        err?.response?.data?.message ||
          "Failed to load dashboard."
      );
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value = 0) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(value);
  };

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <h2 className="text-lg font-semibold text-white">
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

  const {
    overview,
    orders,
    payments,
    inventory,
  } = dashboard;

  return (
    <div className="space-y-8">
      <AdminPageHeader
        title="Dashboard"
        subtitle="Monitor your store performance and business insights."
      />

            {/* Overview */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          title="Total Revenue"
          value={formatCurrency(
            overview.totalRevenue
          )}
        />

        <AdminStatCard
          title="Total Orders"
          value={overview.totalOrders}
        />

        <AdminStatCard
          title="Total Products"
          value={overview.totalProducts}
        />

        <AdminStatCard
          title="Total Customers"
          value={overview.totalCustomers}
        />
      </div>

      {/* Order Status */}

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Order Status
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <AdminStatusCard
            title="Pending"
            value={orders.pending}
            color="yellow"
          />

          <AdminStatusCard
            title="Confirmed"
            value={orders.confirmed}
            color="blue"
          />

          <AdminStatusCard
            title="Processing"
            value={orders.processing}
            color="orange"
          />

          <AdminStatusCard
            title="Shipped"
            value={orders.shipped}
            color="indigo"
          />

          <AdminStatusCard
            title="Delivered"
            value={orders.delivered}
            color="green"
          />

          <AdminStatusCard
            title="Cancelled"
            value={orders.cancelled}
            color="red"
          />
        </div>
      </section>

      {/* Payment Status */}

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Payment Status
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AdminStatusCard
            title="Paid"
            value={payments.paid}
            color="green"
          />

          <AdminStatusCard
            title="Pending"
            value={payments.pending}
            color="yellow"
          />

          <AdminStatusCard
            title="Failed"
            value={payments.failed}
            color="red"
          />

          <AdminStatusCard
            title="Refunded"
            value={payments.refunded}
            color="purple"
          />
        </div>
      </section>

      {/* Inventory */}

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Inventory
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <AdminStatusCard
            title="Low Stock Products"
            value={inventory.lowStockProducts}
            color="red"
          />
        </div>
      </section>

          </div>
  );
};

export default Dashboard;