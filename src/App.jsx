import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import { Toaster } from "react-hot-toast";
import Footers from "./components/Footers";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import ForgotPassword from "./pages/ForgetPassword";
import Analytics from "./pages/Analytics";
import Admin from "./pages/AdminDashboard";
import TransactionsPage from "./pages/Transactions";
import BudgetPage from "./pages/Budget";
import ProfilePage from "./pages/Profile";  

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<div>contact</div>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/transactions" element={<TransactionsPage />} /> 
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footers/>
    </Router>
  );
}

export default App;