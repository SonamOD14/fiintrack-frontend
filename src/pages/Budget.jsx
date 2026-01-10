import React, { useState } from 'react';
import { Wallet, TrendingUp, Home, Menu, Bell, User, ChevronDown, Plus, Edit, Trash2, Target, AlertCircle, CheckCircle, TrendingDown, DollarSign, Calendar, ShoppingCart, Utensils, Car, Film, Heart, ShoppingBag, Coffee, Zap, CreditCard, Flame, Award, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, RadialBarChart, RadialBar } from 'recharts';

export default function BudgetPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const [budgets, setBudgets] = useState([
    { 
      id: 1, 
      category: 'Food & Dining', 
      icon: Utensils, 
      color: 'bg-green-500',
      budget: 1000, 
      spent: 850, 
      remaining: 150,
      transactions: 24,
      trend: 'up',
      lastMonth: 780,
      status: 'good'
    },
    { 
      id: 2, 
      category: 'Transportation', 
      icon: Car, 
      color: 'bg-blue-500',
      budget: 500, 
      spent: 420, 
      remaining: 80,
      transactions: 18,
      trend: 'down',
      lastMonth: 480,
      status: 'good'
    },
    { 
      id: 3, 
      category: 'Shopping', 
      icon: ShoppingBag, 
      color: 'bg-purple-500',
      budget: 800, 
      spent: 750, 
      remaining: 50,
      transactions: 12,
      trend: 'up',
      lastMonth: 650,
      status: 'warning'
    },
    { 
      id: 4, 
      category: 'Entertainment', 
      icon: Film, 
      color: 'bg-red-500',
      budget: 400, 
      spent: 420, 
      remaining: -20,
      transactions: 15,
      trend: 'up',
      lastMonth: 380,
      status: 'danger'
    },
    { 
      id: 5, 
      category: 'Healthcare', 
      icon: Heart, 
      color: 'bg-pink-500',
      budget: 300, 
      spent: 180, 
      remaining: 120,
      transactions: 5,
      trend: 'down',
      lastMonth: 220,
      status: 'good'
    },
    { 
      id: 6, 
      category: 'Bills & Utilities', 
      icon: Zap, 
      color: 'bg-yellow-500',
      budget: 800, 
      spent: 750, 
      remaining: 50,
      transactions: 8,
      trend: 'stable',
      lastMonth: 740,
      status: 'good'
    },
    { 
      id: 7, 
      category: 'Coffee & Snacks', 
      icon: Coffee, 
      color: 'bg-amber-500',
      budget: 200, 
      spent: 165, 
      remaining: 35,
      transactions: 28,
      trend: 'down',
      lastMonth: 190,
      status: 'good'
    },
    { 
      id: 8, 
      category: 'Groceries', 
      icon: ShoppingCart, 
      color: 'bg-emerald-500',
      budget: 600, 
      spent: 480, 
      remaining: 120,
      transactions: 16,
      trend: 'down',
      lastMonth: 520,
      status: 'good'
    }
  ]);

  const totalBudget = budgets.reduce((sum, b) => sum + b.budget, 0);
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const totalRemaining = budgets.reduce((sum, b) => sum + b.remaining, 0);
  const percentageUsed = ((totalSpent / totalBudget) * 100).toFixed(1);

  const getStatusColor = (status) => {
    switch(status) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'danger': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'good': return CheckCircle;
      case 'warning': return AlertCircle;
      case 'danger': return AlertCircle;
      default: return Target;
    }
  };

  const monthlyProgressData = [
    { month: 'Jan', budgeted: 4500, spent: 4200 },
    { month: 'Feb', budgeted: 4500, spent: 3900 },
    { month: 'Mar', budgeted: 4600, spent: 4300 },
    { month: 'Apr', budgeted: 4600, spent: 4100 },
    { month: 'May', budgeted: 4600, spent: 3800 },
    { month: 'Jun', budgeted: 4600, spent: 4015 }
  ];

  const categoryDistribution = budgets.map(b => ({
    name: b.category,
    value: b.spent,
    color: b.color.replace('bg-', '')
  }));

  const radialData = budgets.slice(0, 5).map(b => ({
    name: b.category,
    value: (b.spent / b.budget) * 100,
    fill: b.color.replace('bg-', '#')
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-gradient-to-b from-emerald-600 to-teal-700 text-white transition-all duration-300 z-50 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-6 flex items-center justify-between">
          <div className={`flex items-center gap-3 ${!sidebarOpen && 'justify-center'}`}>
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <Wallet className="w-6 h-6 text-emerald-600" />
            </div>
            {sidebarOpen && <span className="font-bold text-xl">ExpenseTracker</span>}
          </div>
        </div>

        <nav className="mt-8">
          {[
            { icon: Home, label: 'Dashboard', active: false },
            { icon: TrendingUp, label: 'Analytics', active: false },
            { icon: CreditCard, label: 'Transactions', active: false },
            { icon: Wallet, label: 'Budget', active: true },
            { icon: User, label: 'Profile', active: false }
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center gap-4 px-6 py-4 hover:bg-white/10 transition-all ${item.active ? 'bg-white/20 border-r-4 border-white' : ''}`}
            >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span>{item.label}</span>}
            </a>
          ))}
        </nav>
      </aside>

  