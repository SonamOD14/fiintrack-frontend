import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/home";
import Register from "./pages/register";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import ForgotPassword from "./pages/ForgetPassword";
import Analytics from "./pages/Analytics";
import AdminDashboard from "./pages/AdminDashboard";
import TransactionsPage from "./pages/Transactions";
import BudgetPage from "./pages/Budget";
import ProfilePage from "./pages/Profile";
import Sidebar from "./components/Sidebar";

function Layout() {
  const location = useLocation();
  const hideLayout = ["/register", "/signin", "/login", "/forgot-password"]
    .includes(location.pathname);

  return (
    <>
      {!hideLayout && <Sidebar />}
      <Outlet />
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      {/*  GLOBAL TOASTER */}
      <Toaster position="top-right" />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/budget" element={<BudgetPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/* Auth routes */}
        <Route path="/login" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;