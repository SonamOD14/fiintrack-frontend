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
}

