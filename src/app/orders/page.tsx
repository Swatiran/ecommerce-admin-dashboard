// app/orders/page.tsx
"use client";

import Sidebar from '../../components/layout/Sidebar';
import Topbar from '../../components/layout/Topbar';
import { getMockOrders } from '../../lib/mockData';
import { useState } from 'react';

export default function OrdersPage() {
  const all = getMockOrders();
  const [filter, setFilter] = useState<'all' | 'pending' | 'shipped' | 'delivered'>('all');

  const visible = all.filter((o) => (filter === 'all' ? true : o.status === filter));

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 min-h-screen flex flex-col">
        <Topbar />
        <main className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Orders</h2>
            <div className="flex gap-2">
              <select value={filter} onChange={(e) => setFilter(e.target.value as any)} className="px-3 py-2 border rounded">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-sm">
            <table className="min-w-full divide-y">
              <thead>
                <tr className="text-left">
                  <th className="px-3 py-2 text-sm text-gray-500">Order ID</th>
                  <th className="px-3 py-2 text-sm text-gray-500">Customer</th>
                  <th className="px-3 py-2 text-sm text-gray-500">Amount</th>
                  <th className="px-3 py-2 text-sm text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {visible.map((o) => (
                  <tr key={o.id}>
                    <td className="px-3 py-2">{o.id}</td>
                    <td className="px-3 py-2">{o.customer}</td>
                    <td className="px-3 py-2">₹{o.amount}</td>
                    <td className="px-3 py-2">
                      <span className={`px-2 py-1 rounded text-xs ${o.status === 'delivered' ? 'bg-green-100 text-green-700' : o.status === 'shipped' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
