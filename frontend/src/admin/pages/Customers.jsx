import { useEffect, useState } from "react";

import AdminPageHeader from "../components/AdminPageHeader";

import {
  getAllCustomers,
  toggleCustomerBlockStatus,
} from "../services/customerApi";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      setLoading(true);

      const response =
        await getAllCustomers();

      setCustomers(
        response.data || []
      );

      setError("");
    } catch (err) {
      console.error(err);

      setError(
        err?.response?.data?.message ||
          "Failed to fetch customers."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleBlockToggle = async (
    id,
    isBlocked
  ) => {
    try {
      await toggleCustomerBlockStatus(
        id,
        {
          isBlocked: !isBlocked,
        }
      );

      fetchCustomers();
    } catch (err) {
      console.error(err);

      alert(
        err?.response?.data?.message ||
          "Failed to update customer."
      );
    }
  };




    if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <h2 className="text-lg font-semibold text-white">
          Loading Customers...
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
    <>
      <AdminPageHeader
        title="Customers"
        subtitle="Manage your customers and account access."
      />

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        <table className="w-full">
          <thead className="border-b border-zinc-800 bg-zinc-950">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                Name
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                Email
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                Phone
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                Joined
              </th>

              <th className="px-6 py-4 text-center text-sm font-medium text-zinc-400">
                Status
              </th>

              <th className="px-6 py-4 text-right text-sm font-medium text-zinc-400">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {customers.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-12 text-center text-zinc-500"
                >
                  No customers found.
                </td>
              </tr>
            ) : (
              customers.map((customer) => (
                <tr
                  key={customer._id}
                  className="border-b border-zinc-800 transition hover:bg-zinc-800/40 last:border-none"
                >
                  <td className="px-6 py-4 font-medium text-white">
                    {customer.name}
                  </td>

                  <td className="px-6 py-4 text-zinc-400">
                    {customer.email}
                  </td>

                  <td className="px-6 py-4 text-zinc-400">
                    {customer.phone || "-"}
                  </td>

                  <td className="px-6 py-4 text-zinc-400">
                    {new Date(
                      customer.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span
                      className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                        customer.isBlocked
                          ? "border border-zinc-700 bg-zinc-800 text-zinc-300"
                          : "border border-amber-500/30 bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      {customer.isBlocked
                        ? "Blocked"
                        : "Active"}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end">
                      <button
                        onClick={() =>
                          handleBlockToggle(
                            customer._id,
                            customer.isBlocked
                          )
                        }
                        className="rounded-lg border border-amber-500/30 px-4 py-2 text-sm font-medium text-amber-400 transition hover:bg-amber-500/10"
                      >
                        {customer.isBlocked
                          ? "Unblock"
                          : "Block"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Customers;