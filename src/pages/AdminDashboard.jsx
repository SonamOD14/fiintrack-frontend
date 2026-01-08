import { useState, useEffect } from "react";
import { getUser } from "../services/api";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await getUser();

        if (response?.data?.success) {
          setData(response.data.user);
        } else {
          toast.error(response?.data?.message || "Something went wrong");
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || "Server error");
      } finally {
        setLoading(false);
      }
    };

    getAllUsers();
  }, []);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
            </tr>
          </thead>

          <tbody>
            {data.map((user, index) => (
              <tr key={user._id} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;