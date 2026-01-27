import React, { useState } from 'react';
import { Wallet, TrendingUp, Home, Menu, Bell, User, ChevronDown, Camera, Edit, Save, X, Mail, Phone, MapPin, Calendar, Briefcase, Globe, Lock, CreditCard, Shield, Smartphone, Eye, EyeOff, Award, Star, TrendingDown, DollarSign, Target, Activity, Settings, LogOut, CheckCircle, AlertCircle, Crown, Zap, Gift, Download, Share2, BarChart3, Sparkles, Trophy, Medal, Flame, Heart, Coffee, TrendingUpIcon } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

export default function ProfilePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState({
    name: 'sonam',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    profession: 'Software Engineer',
    website: 'johndoe.com',
    bio: 'Passionate about personal finance and building wealth. Love traveling and trying new restaurants.',
    joinDate: 'January 2024',
    avatar: null,
    membershipTier: 'Premium',
    level: 15,
    xp: 2850,
    nextLevelXp: 3000
  });

  const stats = [
    { label: 'Total Transactions', value: '1,247', icon: Activity, color: 'from-blue-500 to-indigo-600', change: '+12%', trend: 'up' },
    { label: 'Total Saved', value: '$12,450', icon: DollarSign, color: 'from-green-500 to-emerald-600', change: '+8%', trend: 'up' },
    { label: 'Budget Goals Met', value: '87%', icon: Target, color: 'from-purple-500 to-pink-600', change: '+5%', trend: 'up' },
    { label: 'Active Days', value: '245', icon: Calendar, color: 'from-orange-500 to-red-600', change: '+3%', trend: 'up' }
  ];

  const savingsGoals = [
    { name: 'Emergency Fund', current: 8500, target: 10000, color: '#10b981', icon: Shield },
    { name: 'Vacation', current: 3200, target: 5000, color: '#3b82f6', icon: Globe },
    { name: 'New Car', current: 12000, target: 20000, color: '#a855f7', icon: Target },
    { name: 'Home Down Payment', current: 35000, target: 50000, color: '#f59e0b', icon: Home }
  ];

  const monthlySpending = [
    { month: 'Jan', amount: 3200, income: 8500 },
    { month: 'Feb', amount: 2800, income: 8800 },
    { month: 'Mar', amount: 3500, income: 9200 },
    { month: 'Apr', amount: 3000, income: 8700 },
    { month: 'May', amount: 2900, income: 9500 },
    { month: 'Jun', amount: 3300, income: 9000 }
  ];

  const spendingHabits = [
    { category: 'Planning', score: 85, max: 100 },
    { category: 'Saving', score: 78, max: 100 },
    { category: 'Investing', score: 65, max: 100 },
    { category: 'Budgeting', score: 90, max: 100 },
    { category: 'Tracking', score: 88, max: 100 }
  ];

  const categoryBreakdown = [
    { name: 'Food', value: 850, color: '#10b981' },
    { name: 'Transport', value: 420, color: '#3b82f6' },
    { name: 'Shopping', value: 680, color: '#a855f7' },
    { name: 'Entertainment', value: 320, color: '#ef4444' },
    { name: 'Bills', value: 750, color: '#f59e0b' },
    { name: 'Other', value: 280, color: '#6b7280' }
  ];

  const achievements = [
    { id: 1, title: 'First Transaction', description: 'Logged your first expense', icon: CheckCircle, earned: true, color: 'from-green-400 to-emerald-500', date: 'Jan 15, 2024' },
    { id: 2, title: 'Budget Master', description: 'Stayed within budget for 3 months', icon: Crown, earned: true, color: 'from-yellow-400 to-orange-500', date: 'Mar 22, 2024' },
    { id: 3, title: 'Savings Streak', description: 'Saved money for 30 days straight', icon: Zap, earned: true, color: 'from-blue-400 to-indigo-500', date: 'Apr 8, 2024' },
    { id: 4, title: '100 Transactions', description: 'Tracked 100 transactions', icon: Star, earned: true, color: 'from-purple-400 to-pink-500', date: 'May 3, 2024' },
    { id: 5, title: 'Goal Achiever', description: 'Completed your first savings goal', icon: Trophy, earned: false, color: 'from-gray-300 to-gray-400', date: null },
    { id: 6, title: 'Premium Member', description: 'Upgraded to Premium tier', icon: Gift, earned: false, color: 'from-gray-300 to-gray-400', date: null },
    { id: 7, title: 'Money Saver', description: 'Saved over $10,000', icon: DollarSign, earned: true, color: 'from-green-400 to-teal-500', date: 'May 28, 2024' },
    { id: 8, title: 'Streak Master', description: '100 day login streak', icon: Flame, earned: false, color: 'from-gray-300 to-gray-400', date: null }
  ];

  const recentActivity = [
    { action: 'Updated budget for Shopping category', time: '2 hours ago', icon: Edit, color: 'from-blue-400 to-blue-600' },
    { action: 'Added transaction: Grocery Shopping', time: '5 hours ago', icon: Activity, color: 'from-green-400 to-green-600' },
    { action: 'Achieved savings goal: Vacation Fund', time: '1 day ago', icon: Target, color: 'from-purple-400 to-purple-600' },
    { action: 'Changed password', time: '3 days ago', icon: Lock, color: 'from-orange-400 to-orange-600' },
    { action: 'Completed budget review', time: '5 days ago', icon: CheckCircle, color: 'from-emerald-400 to-emerald-600' }
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah Chen', score: 9850, avatar: 'SC', change: 0 },
    { rank: 2, name: 'Mike Johnson', score: 9520, avatar: 'MJ', change: 1 },
    { rank: 3, name: 'You', score: 9200, avatar: 'OD', change: -1, isUser: true },
    { rank: 4, name: 'Emma Wilson', score: 8890, avatar: 'EW', change: 0 },
    { rank: 5, name: 'Alex Brown', score: 8640, avatar: 'AB', change: 2 }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const xpPercentage = (userData.xp / userData.nextLevelXp) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-xl shadow-sm sticky top-0 z-40 border-b border-gray-200">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg transition-all">
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">My Profile</h1>
                <p className="text-sm text-gray-500">Manage your account and track progress</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></span>
              </button>
              <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 rounded-xl p-2 transition-all">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold ring-2 ring-emerald-200">
                    OD
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>
        </header>

        {/* Profile Content */}
        <main className="p-6 space-y-6">
          {/* Epic Profile Header */}
          <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="relative z-10 p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar with Level Ring */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                  <div className="relative w-40 h-40 bg-white rounded-full flex items-center justify-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-teal-600 shadow-2xl ring-8 ring-white/50">
                    OD
                  </div>
                  <button className="absolute bottom-2 right-2 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group">
                    <Camera className="w-6 h-6 text-white" />
                  </button>

                  {/* Level Badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-1 animate-bounce">
                    <Sparkles className="w-4 h-4" />
                    Lv. {userData.level}
                  </div>

                  {/* Premium Badge */}
                  <div className="absolute -top-2 -left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-1">
                    <Crown className="w-4 h-4" />
                    Premium
                  </div>
                </div>

                {/* User Info */}
                <div className="flex-1 text-center md:text-left text-white space-y-4">
                  <div>
                    <h2 className="text-5xl font-bold mb-2 drop-shadow-lg">{userData.name}</h2>
                    <p className="text-xl opacity-90 mb-1">{userData.profession}</p>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-sm opacity-75">
                      <Medal className="w-4 h-4" />
                      <span>Rank #3 • Top 5% of users</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Mail className="w-4 h-4" />
                      <span>{userData.email}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      <MapPin className="w-4 h-4" />
                      <span>{userData.location}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {userData.joinDate}</span>
                    </div>
                  </div>

                  {/* XP Progress */}
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 max-w-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Progress to Level {userData.level + 1}</span>
                      <span className="text-sm font-bold">{xpPercentage.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 rounded-full transition-all duration-1000 animate-pulse"
                        style={{ width: `${xpPercentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs mt-2 opacity-75">{userData.xp} / {userData.nextLevelXp} XP • {userData.nextLevelXp - userData.xp} XP to next level</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2"
                  >
                    <Edit className="w-5 h-5" />
                    Edit Profile
                  </button>
                  <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share Profile
                  </button>
                  <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Export Data
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                      <stat.icon className="w-7 h-7" />
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUpIcon className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Epic Tabs */}
          <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg"></div>
                )}
                <tab.icon className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Financial Habits & Category Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Financial Habits Score</h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={spendingHabits}>
                          <PolarGrid stroke="#e5e7eb" />
                          <PolarAngleAxis dataKey="category" tick={{ fill: '#6b7280', fontSize: 12 }} />
                          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#6b7280' }} />
                          <Radar name="Score" dataKey="score" stroke="#a855f7" fill="#a855f7" fillOpacity={0.6} />
                          <Tooltip />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 grid grid-cols-5 gap-2">
                      {spendingHabits.map((habit, i) => (
                        <div key={i} className="text-center">
                          <p className="text-xs text-gray-500">{habit.category}</p>
                          <p className="text-lg font-bold text-purple-600">{habit.score}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">Spending Distribution</h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={categoryBreakdown}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {categoryBreakdown.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `$${value}`} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Goals */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Savings Goals Progress</h3>
                    <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all transform hover:scale-105 font-semibold">
                      + Add Goal
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {savingsGoals.map((goal, index) => {
                      const percentage = (goal.current / goal.target) * 100;
                      const Icon = goal.icon;
                      return (
                        <div key={index} className="relative group/goal">
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-lg opacity-0 group-hover/goal:opacity-20 transition-opacity"></div>
                          <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-emerald-300 transition-all">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: goal.color }}>
                                  <Icon className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-gray-900">{goal.name}</h4>
                              </div>
                              <span className="text-sm font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                                {percentage.toFixed(0)}%
                              </span>
                            </div>
                            <div className="mb-4">
                              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                                <div
                                  className="h-full rounded-full transition-all duration-1000 shadow-lg"
                                  style={{
                                    width: `${percentage}%`,
                                    background: `linear-gradient(90deg, ${goal.color}, ${goal.color}dd)`
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Current: <span className="font-bold text-gray-900">${goal.current.toLocaleString()}</span></span>
                              <span className="text-gray-600">Target: <span className="font-bold text-gray-900">${goal.target.toLocaleString()}</span></span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Recent Activity & Leaderboard */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
                  <div className="space-y-3">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all group">
                        <div className={`w-12 h-12 bg-gradient-to-r ${activity.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          <activity.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Leaderboard</h3>
                    <Trophy className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="space-y-3">
                    {leaderboard.map((user, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all ${user.isUser
                            ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 shadow-lg'
                            : 'hover:bg-gray-50'
                          }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${user.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white' :
                            user.rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-white' :
                              user.rank === 3 ? 'bg-gradient-to-r from-orange-400 to-red-400 text-white' :
                                'bg-gray-100 text-gray-600'
                          }`}>
                          {user.rank === 1 ? <Crown className="w-4 h-4" /> : user.rank}
                        </div>
                        <div className={`w-10 h-10 ${user.isUser ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 'bg-gradient-to-br from-blue-500 to-indigo-600'} rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg`}>
                          {user.avatar}
                        </div>
                        <div className="flex-1">
                          <p className={`font-semibold ${user.isUser ? 'text-emerald-700' : 'text-gray-900'}`}>{user.name}</p>
                          <p className="text-sm text-gray-500">{user.score.toLocaleString()} points</p>
                        </div>
                        {user.change !== 0 && (
                          <div className={`px-2 py-1 rounded-full text-xs font-bold ${user.change > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                            }`}>
                            {user.change > 0 ? '↑' : '↓'} {Math.abs(user.change)}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Income vs Spending Trend</h3>
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={monthlySpending}>
                        <defs>
                          <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="month" tick={{ fill: '#6b7280' }} />
                        <YAxis tick={{ fill: '#6b7280' }} />
                        <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
                        <Legend />
                        <Area type="monotone" dataKey="income" stroke="#10b981" fillOpacity={1} fill="url(#colorIncome)" name="Income" />
                        <Area type="monotone" dataKey="amount" stroke="#ef4444" fillOpacity={1} fill="url(#colorExpenses)" name="Expenses" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Achievements & Badges</h3>
                  <p className="text-gray-500">Unlock badges by reaching milestones and completing challenges</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`relative p-6 rounded-2xl transition-all transform hover:scale-105 ${achievement.earned
                          ? 'bg-gradient-to-br from-white to-gray-50 border-2 border-emerald-200 shadow-xl'
                          : 'bg-gray-50 border-2 border-gray-200 opacity-60'
                        }`}
                    >
                      {achievement.earned && (
                        <div className="absolute top-2 right-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                      <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto shadow-2xl ${achievement.earned ? 'animate-pulse' : 'grayscale'}`}>
                        <achievement.icon className="w-10 h-10" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-center mb-2">{achievement.title}</h4>
                      <p className="text-sm text-gray-600 text-center mb-3">{achievement.description}</p>
                      {achievement.earned && achievement.date && (
                        <div className="text-center">
                          <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                            Unlocked {achievement.date}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl border-2 border-purple-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">Overall Progress</h4>
                    <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {achievements.filter(a => a.earned).length}/{achievements.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full transition-all duration-1000 shadow-lg"
                      style={{ width: `${(achievements.filter(a => a.earned).length / achievements.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 text-center">
                    {achievements.length - achievements.filter(a => a.earned).length} more to unlock all achievements!
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Account Settings</h3>
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={userData.name}
                      onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={userData.phone}
                      onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      value={userData.location}
                      onChange={(e) => setUserData({ ...userData, location: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
                    <textarea
                      value={userData.bio}
                      onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all resize-none"
                    />
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                      <Save className="w-5 h-5" />
                      Save Changes
                    </button>
                    <button className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Security Settings</h3>
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Current Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all pr-12"
                        placeholder="Enter current password"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      placeholder="Enter new password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm New Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      placeholder="Confirm new password"
                    />
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4">Two-Factor Authentication</h4>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">SMS Authentication</p>
                          <p className="text-sm text-gray-500">Receive codes via text message</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all transform hover:scale-105 font-semibold">
                        Enable
                      </button>
                    </div>
                  </div>

                  <button className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Update Password
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border-2 border-red-300 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                  <h4 className="text-xl font-bold text-red-900">Danger Zone</h4>
                </div>
                <p className="text-sm text-red-700 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}