import React, { useState } from 'react';
import { Wallet, TrendingUp, Home, Menu, Bell, User, ChevronDown, Search, Filter, Calendar, Download, Plus, Edit, Trash2, X, Check, ShoppingCart, Utensils, Car, Film, Heart, ShoppingBag, Coffee, Zap, Home as HomeIcon, Smartphone, CreditCard, DollarSign, ArrowUpRight, ArrowDownRight, MoreVertical, Eye } from 'lucide-react';

export default function TransactionsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

  const [transactions, setTransactions] = useState([
    { id: 1, name: 'Whole Foods Market', category: 'Food', amount: -125.50, date: '2026-01-06', time: '10:30 AM', status: 'completed', merchant: 'Whole Foods', type: 'expense', icon: ShoppingCart, color: 'bg-green-500', description: 'Weekly grocery shopping' },
    { id: 2, name: 'Monthly Salary', category: 'Income', amount: 5000, date: '2026-01-05', time: '09:00 AM', status: 'completed', merchant: 'Acme Corp', type: 'income', icon: DollarSign, color: 'bg-emerald-500', description: 'Monthly salary deposit' },
    { id: 3, name: 'Uber Trip to Airport', category: 'Transport', amount: -45.00, date: '2026-01-05', time: '08:15 PM', status: 'completed', merchant: 'Uber', type: 'expense', icon: Car, color: 'bg-blue-500', description: 'Airport transfer' },
    { id: 4, name: 'Netflix Subscription', category: 'Entertainment', amount: -15.99, date: '2026-01-05', time: '12:00 PM', status: 'pending', merchant: 'Netflix', type: 'expense', icon: Film, color: 'bg-red-500', description: 'Monthly streaming service' },
    { id: 5, name: 'Olive Garden Restaurant', category: 'Food', amount: -85.00, date: '2026-01-04', time: '07:30 PM', status: 'completed', merchant: 'Olive Garden', type: 'expense', icon: Utensils, color: 'bg-orange-500', description: 'Dinner with friends' },
    { id: 6, name: 'Zara Fashion Store', category: 'Shopping', amount: -210.00, date: '2026-01-03', time: '03:45 PM', status: 'completed', merchant: 'Zara', type: 'expense', icon: ShoppingBag, color: 'bg-purple-500', description: 'New clothes' },
    { id: 7, name: 'Shell Gas Station', category: 'Transport', amount: -52.00, date: '2026-01-03', time: '09:00 AM', status: 'completed', merchant: 'Shell', type: 'expense', icon: Car, color: 'bg-blue-500', description: 'Fuel refill' },
    { id: 8, name: 'CVS Pharmacy', category: 'Healthcare', amount: -32.50, date: '2026-01-02', time: '11:20 AM', status: 'completed', merchant: 'CVS', type: 'expense', icon: Heart, color: 'bg-pink-500', description: 'Prescription medicine' },
    { id: 9, name: 'Starbucks Coffee', category: 'Food', amount: -8.50, date: '2026-01-02', time: '08:00 AM', status: 'completed', merchant: 'Starbucks', type: 'expense', icon: Coffee, color: 'bg-amber-500', description: 'Morning coffee' },
    { id: 10, name: 'Freelance Project', category: 'Income', amount: 1200, date: '2026-01-01', time: '04:00 PM', status: 'completed', merchant: 'Client XYZ', type: 'income', icon: DollarSign, color: 'bg-emerald-500', description: 'Web design project' },
    { id: 11, name: 'Amazon Purchase', category: 'Shopping', amount: -156.00, date: '2025-12-31', time: '02:30 PM', status: 'completed', merchant: 'Amazon', type: 'expense', icon: ShoppingCart, color: 'bg-orange-400', description: 'Electronics accessories' },
    { id: 12, name: 'Electric Bill', category: 'Bills', amount: -120.00, date: '2025-12-30', time: '10:00 AM', status: 'completed', merchant: 'City Power', type: 'expense', icon: Zap, color: 'bg-yellow-500', description: 'Monthly electricity' },
    { id: 13, name: 'Rent Payment', category: 'Bills', amount: -1500, date: '2025-12-28', time: '09:00 AM', status: 'completed', merchant: 'Landlord', type: 'expense', icon: HomeIcon, color: 'bg-indigo-500', description: 'Monthly rent' },
    { id: 14, name: 'Apple Store', category: 'Shopping', amount: -899, date: '2025-12-27', time: '01:00 PM', status: 'completed', merchant: 'Apple', type: 'expense', icon: Smartphone, color: 'bg-gray-700', description: 'New iPhone' },
  ]);

  const categories = [
    { name: 'All', value: 'all', color: 'bg-gray-500' },
    { name: 'Food', value: 'Food', color: 'bg-green-500' },
    { name: 'Transport', value: 'Transport', color: 'bg-blue-500' },
    { name: 'Shopping', value: 'Shopping', color: 'bg-purple-500' },
    { name: 'Entertainment', value: 'Entertainment', color: 'bg-red-500' },
    { name: 'Healthcare', value: 'Healthcare', color: 'bg-pink-500' },
    { name: 'Bills', value: 'Bills', color: 'bg-yellow-500' },
    { name: 'Income', value: 'Income', color: 'bg-emerald-500' }
  ];

  const filteredTransactions = transactions.filter(t => {
    const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || t.status === selectedStatus;
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         t.merchant.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const netBalance = totalIncome - totalExpense;

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
            { icon: CreditCard, label: 'Transactions', active: true },
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
                <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
                <p className="text-sm text-gray-500">Manage all your expenses and income</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <Plus className="w-5 h-5" />
                Add Transaction
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

        {/* Main Content */}
        <main className="p-6 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <ArrowDownRight className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">This Month</span>
              </div>
              <p className="text-sm opacity-90 mb-1">Total Income</p>
              <p className="text-4xl font-bold">${totalIncome.toFixed(2)}</p>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">This Month</span>
              </div>
              <p className="text-sm opacity-90 mb-1">Total Expenses</p>
              <p className="text-4xl font-bold">${totalExpense.toFixed(2)}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <DollarSign className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Net</span>
              </div>
              <p className="text-sm opacity-90 mb-1">Net Balance</p>
              <p className="text-4xl font-bold">${netBalance.toFixed(2)}</p>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search transactions..."
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-4 py-2 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                      selectedCategory === cat.value
                        ? `${cat.color} text-white shadow-lg`
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* View Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                    viewMode === 'list' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  List
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                    viewMode === 'grid' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Grid
                </button>
              </div>

              {/* Export */}
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all">
                <Download className="w-4 h-4" />
                <span className="font-semibold">Export</span>
              </button>
            </div>
          </div>

          {/* Transactions List/Grid */}
          {viewMode === 'list' ? (
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Transaction</th>
                      <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Category</th>
                      <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Date & Time</th>
                      <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Status</th>
                      <th className="text-right py-4 px-6 text-sm font-bold text-gray-700">Amount</th>
                      <th className="text-center py-4 px-6 text-sm font-bold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTransactions.map((transaction, index) => (
                      <tr
                        key={transaction.id}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-all"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 ${transaction.color} rounded-xl flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-all`}>
                              <transaction.icon className="w-6 h-6" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">{transaction.name}</p>
                              <p className="text-sm text-gray-500">{transaction.merchant}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`px-4 py-2 rounded-full text-xs font-bold ${transaction.color} text-white shadow-sm`}>
                            {transaction.category}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <p className="text-sm font-semibold text-gray-900">{transaction.date}</p>
                          <p className="text-xs text-gray-500">{transaction.time}</p>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`px-4 py-2 rounded-full text-xs font-bold ${
                            transaction.status === 'completed' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {transaction.status === 'completed' ? '✓ Completed' : '⏱ Pending'}
                          </span>
                        </td>
                        <td className={`py-4 px-6 text-right font-bold text-lg ${
                          transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center justify-center gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all transform hover:scale-110">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all transform hover:scale-110">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all transform hover:scale-110">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTransactions.map((transaction, index) => (
                <div
                  key={transaction.id}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 ${transaction.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      <transaction.icon className="w-7 h-7" />
                    </div>
                    <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{transaction.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{transaction.merchant}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${transaction.color} text-white`}>
                      {transaction.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      transaction.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {transaction.status}
                    </span>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500">{transaction.date}</p>
                        <p className="text-xs text-gray-400">{transaction.time}</p>
                      </div>
                      <p className={`text-2xl font-bold ${
                        transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-sm text-gray-600">
              Showing <span className="font-bold">{filteredTransactions.length}</span> of <span className="font-bold">{transactions.length}</span> transactions
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all font-semibold text-gray-700">
                Previous
              </button>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all font-semibold">
                1
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all font-semibold text-gray-700">
                2
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all font-semibold text-gray-700">
                3
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all font-semibold text-gray-700">
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}