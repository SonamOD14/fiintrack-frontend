// import { useState } from 'react';
// import { CreditCard, TrendingUp, TrendingDown, Bell, Plus, BarChart3 } from 'lucide-react';

// export default function ExpenseVaultDashboard() {
//   const [expenses, setExpenses] = useState([
//     { category: 'Food', current: 1800, previous: 1500 },
//     { category: 'Transport', current: 800, previous: 900 },
//     { category: 'Bills', current: 1200, previous: 1100 },
//     { category: 'Entertainment', current: 600, previous: 800 },
//     { category: 'Others', current: 880, previous: 700 }
//   ]);

//   // Calculate radar chart points
//   const maxValue = 2000;
//   const categories = expenses.length;
//   const angleStep = (Math.PI * 2) / categories;
//   const centerX = 200;
//   const centerY = 200;
//   const maxRadius = 150;

//   const getPoint = (index, value) => {
//     const angle = angleStep * index - Math.PI / 2;
//     const radius = (value / maxValue) * maxRadius;
//     return {
//       x: centerX + radius * Math.cos(angle),
//       y: centerY + radius * Math.sin(angle)
//     };
//   };

//   const currentPoints = expenses.map((exp, i) => getPoint(i, exp.current));
//   const previousPoints = expenses.map((exp, i) => getPoint(i, exp.previous));

//   const currentPath = currentPoints.map((p, i) =>
//     `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
//   ).join(' ') + ' Z';

//   const previousPath = previousPoints.map((p, i) =>
//     `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
//   ).join(' ') + ' Z';

//   // Create grid circles
//   const gridLevels = [400, 800, 1200, 1600, 2000];
//   const gridCircles = gridLevels.map(level => ({
//     radius: (level / maxValue) * maxRadius,
//     label: level
//   }));

//   // Create grid lines
//   const gridLines = expenses.map((_, i) => {
//     const point = getPoint(i, maxValue);
//     return { x: point.x, y: point.y };
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
//               <div className="text-white text-2xl font-bold">⚡</div>
//             </div>
//             <h1 className="text-3xl font-bold text-white">ExpenseVault</h1>
//           </div>

//           <div className="flex items-center gap-4">
//             <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
//               <Bell className="text-white" size={24} />
//             </button>
//             <div className="flex items-center gap-3 bg-white/10 rounded-full pr-4 pl-2 py-2">
//               <img
//                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
//                 alt="Alex Morgan"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div className="text-left">
//                 <div className="text-white font-semibold">Alex Morgan</div>
//                 <div className="text-purple-300 text-xs">Premium User</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Welcome Section */}
//         <div className="mb-8">
//           <h2 className="text-4xl font-bold text-white mb-2">Welcome back, Alex 👋</h2>
//           <p className="text-purple-200 text-lg">Your financial overview at a glance</p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {/* Total Balance */}
//           <div className="bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
//             <div className="flex justify-between items-start mb-4">
//               <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
//                 <CreditCard className="text-white" size={24} />
//               </div>
//               <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
//                 +12.5%
//               </span>
//             </div>
//             <div className="text-purple-200 text-sm mb-1">Total Balance</div>
//             <div className="text-white text-4xl font-bold mb-1">$24,580</div>
//             <div className="text-purple-300 text-xs">Updated just now</div>
//           </div>

//           {/* Monthly Income */}
//           <div className="bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
//             <div className="flex justify-between items-start mb-4">
//               <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
//                 <TrendingUp className="text-white" size={24} />
//               </div>
//               <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
//                 +8.2%
//               </span>
//             </div>
//             <div className="text-purple-200 text-sm mb-1">Monthly Income</div>
//             <div className="text-white text-4xl font-bold mb-1">$8,450</div>
//             <div className="text-purple-300 text-xs">December 2024</div>
//           </div>

//           {/* Monthly Expenses */}
//           <div className="bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
//             <div className="flex justify-between items-start mb-4">
//               <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
//                 <TrendingDown className="text-white" size={24} />
//               </div>
//               <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-semibold">
//                 +3.1%
//               </span>
//             </div>
//             <div className="text-purple-200 text-sm mb-1">Monthly Expenses</div>
//             <div className="text-white text-4xl font-bold mb-1">$5,280</div>
//             <div className="text-purple-300 text-xs">December 2024</div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Radar Chart */}
//           <div className="lg:col-span-2 bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
//             <h3 className="text-2xl font-bold text-white mb-6">Expense Categories Radar</h3>

//             <div className="flex items-center justify-center gap-6 mb-4">
//               <div className="flex items-center gap-2">
//                 <div className="w-12 h-3 bg-purple-500 rounded"></div>
//                 <span className="text-white text-sm">Current Month</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-12 h-3 bg-indigo-500 rounded"></div>
//                 <span className="text-white text-sm">Previous Month</span>
//               </div>
//             </div>

//             <div className="flex justify-center">
//               <svg width="400" height="400" viewBox="0 0 400 400">
//                 {/* Grid circles */}
//                 {gridCircles.map((circle, i) => (
//                   <g key={i}>
//                     <circle
//                       cx={centerX}
//                       cy={centerY}
//                       r={circle.radius}
//                       fill="none"
//                       stroke="rgba(139, 92, 246, 0.2)"
//                       strokeWidth="1"
//                     />
//                     <text
//                       x={centerX + 5}
//                       y={centerY - circle.radius - 5}
//                       fill="rgba(196, 181, 253, 0.6)"
//                       fontSize="10"
//                     >
//                       {circle.label}
//                     </text>
//                   </g>
//                 ))}

//                 {/* Grid lines */}
//                 {gridLines.map((point, i) => (
//                   <line
//                     key={i}
//                     x1={centerX}
//                     y1={centerY}
//                     x2={point.x}
//                     y2={point.y}
//                     stroke="rgba(139, 92, 246, 0.2)"
//                     strokeWidth="1"
//                   />
//                 ))}

//                 {/* Previous month polygon */}
//                 <path
//                   d={previousPath}
//                   fill="rgba(99, 102, 241, 0.2)"
//                   stroke="rgb(99, 102, 241)"
//                   strokeWidth="2"
//                 />

//                 {/* Current month polygon */}
//                 <path
//                   d={currentPath}
//                   fill="rgba(168, 85, 247, 0.3)"
//                   stroke="rgb(168, 85, 247)"
//                   strokeWidth="2"
//                 />

//                 {/* Current month points */}
//                 {currentPoints.map((point, i) => (
//                   <circle
//                     key={`current-${i}`}
//                     cx={point.x}
//                     cy={point.y}
//                     r="5"
//                     fill="rgb(168, 85, 247)"
//                     stroke="white"
//                     strokeWidth="2"
//                   />
//                 ))}

//                 {/* Previous month points */}
//                 {previousPoints.map((point, i) => (
//                   <circle
//                     key={`previous-${i}`}
//                     cx={point.x}
//                     cy={point.y}
//                     r="4"
//                     fill="rgb(99, 102, 241)"
//                   />
//                 ))}

//                 {/* Category labels */}
//                 {expenses.map((exp, i) => {
//                   const labelPoint = getPoint(i, maxValue + 300);
//                   return (
//                     <text
//                       key={i}
//                       x={labelPoint.x}
//                       y={labelPoint.y}
//                       fill="white"
//                       fontSize="14"
//                       fontWeight="600"
//                       textAnchor="middle"
//                     >
//                       {exp.category}
//                     </text>
//                   );
//                 })}
//               </svg>
//             </div>
//           </div>

//           {/* Quick Actions */}
//           <div className="bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
//             <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>

//             <div className="space-y-4">
//               <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
//                 <Plus size={24} />
//                 Add Expense
//               </button>

//               <button className="w-full py-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
//                 <Plus size={24} />
//                 Add Income
//               </button>

//               <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
//                 <BarChart3 size={24} />
//                 View Reports
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Floating Action Button */}
//         <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl hover:shadow-purple-500/50 hover:scale-110 transition-all flex items-center justify-center">
//           <Plus className="text-white" size={32} />
//         </button>
//       </div>
//     </div>
//   );
// }





import React, { useState } from 'react';
import { Wallet, TrendingUp, TrendingDown, DollarSign, CreditCard, ShoppingCart, Home, Utensils, Car, Film, Heart, ShoppingBag, Menu, Bell, User, Search, ChevronDown, Calendar } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

export default function ExpenseTrackerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Spider/Radar chart data - Shows spending by category
  const spiderData = [
    { category: 'Food', amount: 850, fullMark: 1000 },
    { category: 'Transport', amount: 420, fullMark: 1000 },
    { category: 'Shopping', amount: 680, fullMark: 1000 },
    { category: 'Entertainment', amount: 320, fullMark: 1000 },
    { category: 'Healthcare', amount: 280, fullMark: 1000 },
    { category: 'Bills', amount: 750, fullMark: 1000 }
  ];

  // Spending trend data
  const trendData = [
    { month: 'Jan', amount: 2400 },
    { month: 'Feb', amount: 2800 },
    { month: 'Mar', amount: 2200 },
    { month: 'Apr', amount: 3200 },
    { month: 'May', amount: 2900 },
    { month: 'Jun', amount: 3500 }
  ];

  // Category breakdown for pie chart
  const pieData = [
    { name: 'Food', value: 850, color: '#10b981' },
    { name: 'Transport', value: 420, color: '#3b82f6' },
    { name: 'Shopping', value: 680, color: '#f59e0b' },
    { name: 'Entertainment', value: 320, color: '#ef4444' },
    { name: 'Healthcare', value: 280, color: '#8b5cf6' },
    { name: 'Bills', value: 750, color: '#06b6d4' }
  ];

  // Recent transactions
  const transactions = [
    { id: 1, name: 'Grocery Shopping', category: 'Food', amount: -125.50, date: '2026-01-06', icon: ShoppingCart, color: 'bg-green-100 text-green-600' },
    { id: 2, name: 'Uber Ride', category: 'Transport', amount: -28.00, date: '2026-01-05', icon: Car, color: 'bg-blue-100 text-blue-600' },
    { id: 3, name: 'Netflix Subscription', category: 'Entertainment', amount: -15.99, date: '2026-01-05', icon: Film, color: 'bg-red-100 text-red-600' },
    { id: 4, name: 'Restaurant', category: 'Food', amount: -85.00, date: '2026-01-04', icon: Utensils, color: 'bg-green-100 text-green-600' },
    { id: 5, name: 'Clothing Store', category: 'Shopping', amount: -210.00, date: '2026-01-03', icon: ShoppingBag, color: 'bg-orange-100 text-orange-600' }
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
            { icon: Home, label: 'Dashboard', active: true },
            { icon: TrendingUp, label: 'Analytics' },
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
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome back, John!</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64"
                />
              </div>
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

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-emerald-600" />
                </div>
                <span className="text-sm font-semibold text-emerald-600">+12.5%</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Total Balance</h3>
              <p className="text-3xl font-bold text-gray-900">$12,450</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-red-600" />
                </div>
                <span className="text-sm font-semibold text-red-600">-8.2%</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Total Expenses</h3>
              <p className="text-3xl font-bold text-gray-900">$3,300</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-blue-600">+5.8%</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Total Income</h3>
              <p className="text-3xl font-bold text-gray-900">$8,500</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-semibold text-purple-600">78%</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Budget Left</h3>
              <p className="text-3xl font-bold text-gray-900">$2,100</p>
            </div>
          </div>

          {/* Spider Chart & Pie Chart Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Spider/Radar Chart - Main Feature */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Spending Analysis</h2>
                  <p className="text-sm text-gray-500">Where you spend the most</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                  <Calendar className="w-4 h-4" />
                  This Month
                </button>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={spiderData}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="category" tick={{ fill: '#6b7280', fontSize: 12 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 1000]} tick={{ fill: '#6b7280' }} />
                    <Radar name="Spending" dataKey="amount" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                      formatter={(value) => [`$${value}`, 'Amount']}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {spiderData.map((item, index) => (
                  <div key={index} className="text-center">
                    <p className="text-xs text-gray-500">{item.category}</p>
                    <p className="text-lg font-bold text-gray-900">${item.amount}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Breakdown Pie Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">Category Breakdown</h2>
                <p className="text-sm text-gray-500">Distribution of expenses</p>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `$${value}`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                {pieData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">${item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Spending Trend */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Spending Trend</h2>
                <p className="text-sm text-gray-500">Monthly expense overview</p>
              </div>
              <button className="px-4 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                View Report
              </button>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fill: '#6b7280' }} />
                  <YAxis tick={{ fill: '#6b7280' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                    formatter={(value) => [`$${value}`, 'Amount']}
                  />
                  <Line type="monotone" dataKey="amount" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
                <p className="text-sm text-gray-500">Your latest expenses</p>
              </div>
              <a href="#" className="text-sm text-emerald-600 font-semibold hover:text-emerald-700">
                View All
              </a>
            </div>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${transaction.color}`}>
                      <transaction.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{transaction.name}</p>
                      <p className="text-sm text-gray-500">{transaction.category} • {transaction.date}</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-red-600">{transaction.amount.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}