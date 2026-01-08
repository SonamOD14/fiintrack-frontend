import React, { useState } from 'react';
import { Wallet, TrendingUp, TrendingDown, DollarSign, CreditCard, ShoppingCart, Home, Utensils, Car, Film, Heart, ShoppingBag, Menu, Bell, User, Search, ChevronDown, Calendar, ArrowUp, ArrowDown, Download, Filter, BarChart3 } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, Legend } from 'recharts';

export default function ExpenseTrackerAnalytics() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [timeRange, setTimeRange] = useState('month');

  // Monthly comparison data
  const comparisonData = [
    { month: 'Jan', income: 8500, expenses: 3200, savings: 5300 },
    { month: 'Feb', income: 8800, expenses: 2800, savings: 6000 },
    { month: 'Mar', income: 9200, expenses: 3500, savings: 5700 },
    { month: 'Apr', income: 8700, expenses: 3200, savings: 5500 },
    { month: 'May', income: 9500, expenses: 2900, savings: 6600 },
    { month: 'Jun', income: 9000, expenses: 3300, savings: 5700 }
  ];

  // Category spending over time
  const categoryTrendData = [
    { month: 'Jan', food: 850, transport: 420, shopping: 680, entertainment: 320, bills: 750 },
    { month: 'Feb', food: 780, transport: 380, shopping: 590, entertainment: 280, bills: 770 },
    { month: 'Mar', food: 920, transport: 450, shopping: 720, entertainment: 380, bills: 730 },
    { month: 'Apr', food: 880, transport: 410, shopping: 680, entertainment: 340, bills: 790 },
    { month: 'May', food: 860, transport: 390, shopping: 650, entertainment: 300, bills: 700 },
    { month: 'Jun', food: 850, transport: 420, shopping: 680, entertainment: 320, bills: 750 }
  ];

  // Weekly spending pattern
  const weeklyData = [
    { day: 'Mon', amount: 120 },
    { day: 'Tue', amount: 85 },
    { day: 'Wed', amount: 145 },
    { day: 'Thu', amount: 98 },
    { day: 'Fri', amount: 210 },
    { day: 'Sat', amount: 275 },
    { day: 'Sun', amount: 190 }
  ];

  // Expense by time of day
  const timeOfDayData = [
    { time: '6AM', amount: 45 },
    { time: '9AM', amount: 120 },
    { time: '12PM', amount: 280 },
    { time: '3PM', amount: 95 },
    { time: '6PM', amount: 320 },
    { time: '9PM', amount: 180 },
    { time: '12AM', amount: 35 }
  ];

  // Budget vs Actual
  const budgetData = [
    { category: 'Food', budget: 1000, actual: 850, color: '#10b981' },
    { category: 'Transport', budget: 500, actual: 420, color: '#3b82f6' },
    { category: 'Shopping', budget: 800, actual: 680, color: '#f59e0b' },
    { category: 'Entertainment', budget: 400, actual: 320, color: '#ef4444' },
    { category: 'Bills', budget: 800, actual: 750, color: '#06b6d4' }
  ];

  // Top spending merchants
  const topMerchants = [
    { name: 'Amazon', amount: 450, transactions: 12, icon: ShoppingBag, color: 'bg-orange-100 text-orange-600' },
    { name: 'Whole Foods', amount: 380, transactions: 8, icon: ShoppingCart, color: 'bg-green-100 text-green-600' },
    { name: 'Uber', amount: 280, transactions: 15, icon: Car, color: 'bg-blue-100 text-blue-600' },
    { name: 'Restaurants', amount: 520, transactions: 10, icon: Utensils, color: 'bg-red-100 text-red-600' },
    { name: 'Netflix', amount: 45, transactions: 3, icon: Film, color: 'bg-purple-100 text-purple-600' }
  ];

  // Insights data
  const insights = [
    { 
      type: 'success', 
      title: 'Great Progress!', 
      description: 'You spent 15% less on shopping this month', 
      icon: TrendingDown,
      color: 'bg-green-100 text-green-600'
    },
    { 
      type: 'warning', 
      title: 'Watch Out', 
      description: 'Food expenses are 20% higher than last month', 
      icon: TrendingUp,
      color: 'bg-orange-100 text-orange-600'
    },
    { 
      type: 'info', 
      title: 'Savings Goal', 
      description: 'You\'re on track to save $6,000 this month', 
      icon: DollarSign,
      color: 'bg-blue-100 text-blue-600'
    }
  ];

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
            { icon: TrendingUp, label: 'Analytics', active: true },
            { icon: CreditCard, label: 'Transactions' },
            { icon: Wallet, label: 'Budget' },
            { icon: User, label: 'Profile' }
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

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600 hover:text-gray-900">
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
                <p className="text-sm text-gray-500">Deep insights into your spending</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                <Download className="w-4 h-4" />
                Export Report
              </button>
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 rounded-lg p-2">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>
        </header>

        {/* Analytics Content */}
        <main className="p-6 space-y-6">
          {/* Time Range Filter */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                <Calendar className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Last 6 Months</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">All Categories</span>
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium opacity-90">Average Monthly Expense</h3>
                <ArrowDown className="w-5 h-5 opacity-75" />
              </div>
              <p className="text-4xl font-bold mb-2">$3,150</p>
              <p className="text-sm opacity-75">5.2% lower than last period</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium opacity-90">Highest Spending Day</h3>
                <BarChart3 className="w-5 h-5 opacity-75" />
              </div>
              <p className="text-4xl font-bold mb-2">Saturday</p>
              <p className="text-sm opacity-75">Average $275 per Saturday</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium opacity-90">Savings Rate</h3>
                <ArrowUp className="w-5 h-5 opacity-75" />
              </div>
              <p className="text-4xl font-bold mb-2">63%</p>
              <p className="text-sm opacity-75">Above your 60% target</p>
            </div>
          </div>

          {/* Income vs Expenses vs Savings */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">Income vs Expenses vs Savings</h2>
              <p className="text-sm text-gray-500">Monthly financial overview</p>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={comparisonData}>
                  <defs>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fill: '#6b7280' }} />
                  <YAxis tick={{ fill: '#6b7280' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                  <Legend />
                  <Area type="monotone" dataKey="income" stroke="#10b981" fillOpacity={1} fill="url(#colorIncome)" />
                  <Area type="monotone" dataKey="expenses" stroke="#ef4444" fillOpacity={1} fill="url(#colorExpenses)" />
                  <Area type="monotone" dataKey="savings" stroke="#3b82f6" fillOpacity={1} fill="url(#colorSavings)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Category Trends & Budget vs Actual */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Category Spending Trends */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">Category Trends</h2>
                <p className="text-sm text-gray-500">Spending by category over time</p>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={categoryTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                    <Legend />
                    <Line type="monotone" dataKey="food" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="transport" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="shopping" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="entertainment" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="bills" stroke="#06b6d4" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Budget vs Actual */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">Budget vs Actual</h2>
                <p className="text-sm text-gray-500">How you're tracking against budget</p>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={budgetData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="category" tick={{ fill: '#6b7280', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                    <Legend />
                    <Bar dataKey="budget" fill="#d1d5db" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="actual" fill="#10b981" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                {budgetData.map((item, index) => {
                  const percentage = ((item.actual / item.budget) * 100).toFixed(0);
                  const isOverBudget = item.actual > item.budget;
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{item.category}</span>
                      <span className={`text-sm font-semibold ${isOverBudget ? 'text-red-600' : 'text-green-600'}`}>
                        {percentage}% {isOverBudget ? '(Over)' : '(Under)'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Weekly Pattern & Time of Day */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Weekly Spending Pattern */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">Weekly Spending Pattern</h2>
                <p className="text-sm text-gray-500">Average spending by day of week</p>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="day" tick={{ fill: '#6b7280' }} />
                    <YAxis tick={{ fill: '#6b7280' }} />
                    <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                    <Bar dataKey="amount" fill="#10b981" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Time of Day Spending */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">Spending by Time of Day</h2>
                <p className="text-sm text-gray-500">When you spend the most</p>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={timeOfDayData}>
                    <defs>
                      <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="time" tick={{ fill: '#6b7280' }} />
                    <YAxis tick={{ fill: '#6b7280' }} />
                    <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                    <Area type="monotone" dataKey="amount" stroke="#3b82f6" fillOpacity={1} fill="url(#colorTime)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Top Merchants & Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Merchants */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">Top Spending Merchants</h2>
                <p className="text-sm text-gray-500">Where your money goes</p>
              </div>
              <div className="space-y-4">
                {topMerchants.map((merchant, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${merchant.color}`}>
                        <merchant.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{merchant.name}</p>
                        <p className="text-sm text-gray-500">{merchant.transactions} transactions</p>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-gray-900">${merchant.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Smart Insights */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">Smart Insights</h2>
                <p className="text-sm text-gray-500">AI-powered spending analysis</p>
              </div>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${insight.color} flex-shrink-0`}>
                        <insight.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{insight.title}</h3>
                        <p className="text-sm text-gray-600">{insight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-500 text-white flex-shrink-0">
                      <TrendingDown className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Recommendation</h3>
                      <p className="text-sm text-gray-600">Consider reducing weekend spending to reach your savings goal faster. You could save an additional $400/month.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}



