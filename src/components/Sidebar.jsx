import { useState } from "react";

import { Wallet, TrendingUp, CreditCard, ShoppingCart, Home, Utensils, Car, Film, Heart, ShoppingBag, Menu, Bell, User, Search, ChevronDown, Calendar } from 'lucide-react';
import { Link, redirect, useNavigate } from 'react-router-dom';


const Sidebar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
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
          { icon: Home, redirect: "/dashboard",label: 'Dashboard', active: false },
          { icon: TrendingUp, redirect : '/analytics',  label: 'Analytics' },
          { icon: CreditCard, redirect : "/transactions", label: 'Transactions' },
          { icon: Wallet, redirect : "/budget", label: 'Budget' },
          { icon: User, redirect : "/profile", label: 'Profile' }
        ].map((item, index) => (

          <Link 
            key={index} 
            to={item.redirect}
            className={`flex items-center gap-4 px-6 py-4 hover:bg-white/10 transition-all ${item.active ? 'bg-white/20 border-r-4 border-white' : ''}`}

          >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  )
};

export default Sidebar;