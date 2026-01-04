import { useState } from 'react';
import { CreditCard, TrendingUp, TrendingDown, Bell, Plus, BarChart3 } from 'lucide-react';

export default function ExpenseVaultDashboard() {
  const [expenses, setExpenses] = useState([
    { category: 'Food', current: 1800, previous: 1500 },
    { category: 'Transport', current: 800, previous: 900 },
    { category: 'Bills', current: 1200, previous: 1100 },
    { category: 'Entertainment', current: 600, previous: 800 },
    { category: 'Others', current: 880, previous: 700 }
  ]);

  // Calculate radar chart points
  const maxValue = 2000;
  const categories = expenses.length;
  const angleStep = (Math.PI * 2) / categories;
  const centerX = 200;
  const centerY = 200;
  const maxRadius = 150;

  const getPoint = (index, value) => {
    const angle = angleStep * index - Math.PI / 2;
    const radius = (value / maxValue) * maxRadius;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  };

  const currentPoints = expenses.map((exp, i) => getPoint(i, exp.current));
  const previousPoints = expenses.map((exp, i) => getPoint(i, exp.previous));

  const currentPath = currentPoints.map((p, i) =>
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ') + ' Z';

  const previousPath = previousPoints.map((p, i) =>
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ') + ' Z';

  // Create grid circles
  const gridLevels = [400, 800, 1200, 1600, 2000];
  const gridCircles = gridLevels.map(level => ({
    radius: (level / maxValue) * maxRadius,
    label: level
  }));

  // Create grid lines
  const gridLines = expenses.map((_, i) => {
    const point = getPoint(i, maxValue);
    return { x: point.x, y: point.y };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <div className="text-white text-2xl font-bold">⚡</div>
            </div>
            <h1 className="text-3xl font-bold text-white">ExpenseVault</h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <Bell className="text-white" size={24} />
            </button>
            <div className="flex items-center gap-3 bg-white/10 rounded-full pr-4 pl-2 py-2">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                alt="Alex Morgan"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="text-white font-semibold">Alex Morgan</div>
                <div className="text-purple-300 text-xs">Premium User</div>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">Welcome back, Alex 👋</h2>
          <p className="text-purple-200 text-lg">Your financial overview at a glance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Balance */}
          <div className="bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <CreditCard className="text-white" size={24} />
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                +12.5%
              </span>
            </div>
            <div className="text-purple-200 text-sm mb-1">Total Balance</div>
            <div className="text-white text-4xl font-bold mb-1">$24,580</div>
            <div className="text-purple-300 text-xs">Updated just now</div>
          </div>

          {/* Monthly Income */}
          <div className="bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-white" size={24} />
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                +8.2%
              </span>
            </div>
            <div className="text-purple-200 text-sm mb-1">Monthly Income</div>
            <div className="text-white text-4xl font-bold mb-1">$8,450</div>
            <div className="text-purple-300 text-xs">December 2024</div>
          </div>

          {/* Monthly Expenses */}
          <div className="bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                <TrendingDown className="text-white" size={24} />
              </div>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-semibold">
                +3.1%
              </span>
            </div>
            <div className="text-purple-200 text-sm mb-1">Monthly Expenses</div>
            <div className="text-white text-4xl font-bold mb-1">$5,280</div>
            <div className="text-purple-300 text-xs">December 2024</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Radar Chart */}
          <div className="lg:col-span-2 bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Expense Categories Radar</h3>

            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-3 bg-purple-500 rounded"></div>
                <span className="text-white text-sm">Current Month</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-3 bg-indigo-500 rounded"></div>
                <span className="text-white text-sm">Previous Month</span>
              </div>
            </div>

            <div className="flex justify-center">
              <svg width="400" height="400" viewBox="0 0 400 400">
                {/* Grid circles */}
                {gridCircles.map((circle, i) => (
                  <g key={i}>
                    <circle
                      cx={centerX}
                      cy={centerY}
                      r={circle.radius}
                      fill="none"
                      stroke="rgba(139, 92, 246, 0.2)"
                      strokeWidth="1"
                    />
                    <text
                      x={centerX + 5}
                      y={centerY - circle.radius - 5}
                      fill="rgba(196, 181, 253, 0.6)"
                      fontSize="10"
                    >
                      {circle.label}
                    </text>
                  </g>
                ))}

                {/* Grid lines */}
                {gridLines.map((point, i) => (
                  <line
                    key={i}
                    x1={centerX}
                    y1={centerY}
                    x2={point.x}
                    y2={point.y}
                    stroke="rgba(139, 92, 246, 0.2)"
                    strokeWidth="1"
                  />
                ))}

                {/* Previous month polygon */}
                <path
                  d={previousPath}
                  fill="rgba(99, 102, 241, 0.2)"
                  stroke="rgb(99, 102, 241)"
                  strokeWidth="2"
                />

                {/* Current month polygon */}
                <path
                  d={currentPath}
                  fill="rgba(168, 85, 247, 0.3)"
                  stroke="rgb(168, 85, 247)"
                  strokeWidth="2"
                />

                {/* Current month points */}
                {currentPoints.map((point, i) => (
                  <circle
                    key={`current-${i}`}
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="rgb(168, 85, 247)"
                    stroke="white"
                    strokeWidth="2"
                  />
                ))}

                {/* Previous month points */}
                {previousPoints.map((point, i) => (
                  <circle
                    key={`previous-${i}`}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="rgb(99, 102, 241)"
                  />
                ))}

                {/* Category labels */}
                {expenses.map((exp, i) => {
                  const labelPoint = getPoint(i, maxValue + 300);
                  return (
                    <text
                      key={i}
                      x={labelPoint.x}
                      y={labelPoint.y}
                      fill="white"
                      fontSize="14"
                      fontWeight="600"
                      textAnchor="middle"
                    >
                      {exp.category}
                    </text>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>

            <div className="space-y-4">
              <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
                <Plus size={24} />
                Add Expense
              </button>

              <button className="w-full py-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
                <Plus size={24} />
                Add Income
              </button>

              <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
                <BarChart3 size={24} />
                View Reports
              </button>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl hover:shadow-purple-500/50 hover:scale-110 transition-all flex items-center justify-center">
          <Plus className="text-white" size={32} />
        </button>
      </div>
    </div>
  );
}