import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SuperAdminDashboard() {
  const [allUsers, setAllUsers] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const token = localStorage.getItem('token'); // Your auth token
  const API_URL = 'http://localhost:5000/api'; // Your backend URL

  // Fetch all data on mount
  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch stats
      const statsRes = await axios.get(`${API_URL}/admin/stats`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStats(statsRes.data);

      // Fetch users
      const usersRes = await axios.get(`${API_URL}/admin/users`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAllUsers(usersRes.data.users);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBanUser = async (userId) => {
    try {
      await axios.put(`${API_URL}/admin/users/${userId}/ban`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // Refresh user list
      fetchDashboardData();
      alert('User banned successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to ban user');
    }
  };

}