// components/layout/Sidebar.tsx
'use client';
import React from 'react';
import Link from 'next/link';

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
      {children}
    </Link>
  </li>
);

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r hidden lg:block">
      <div className="p-4 border-b">
        <div className="text-xl font-bold">Admin</div>
        <div className="text-xs text-gray-500">Dashboard</div>
      </div>
      <nav className="p-4">
        <ul className="space-y-1">
          <NavItem href="/dashboard">📊 Dashboard</NavItem>
          <NavItem href="/products">🛍️ Products</NavItem>
          <NavItem href="/orders">📦 Orders</NavItem>
          <NavItem href="/customers">👥 Customers</NavItem>
          <NavItem href="/analytics">📈 Analytics</NavItem>
          <NavItem href="/settings">⚙️ Settings</NavItem>
        </ul>
      </nav>
    </aside>
  );
}
