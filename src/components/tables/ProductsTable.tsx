// components/tables/ProductsTable.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { getMockProducts } from '../../lib/mockData';
import Link from 'next/link';

export default function ProductsTable({ initialProducts }: { initialProducts?: any[] }) {
  const [products, setProducts] = useState<any[]>(initialProducts ?? []);
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    if (!initialProducts) {
      const data = getMockProducts();
      setProducts(data);
    }
  }, [initialProducts]);

  const filtered = products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
  const total = filtered.length;
  const pages = Math.ceil(total / perPage);
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search product" className="px-3 py-2 border rounded w-72" />
        <div className="text-sm text-gray-600">Showing {visible.length} of {total}</div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y">
          <thead>
            <tr className="text-left">
              <th className="px-3 py-2 text-sm text-gray-500">Product</th>
              <th className="px-3 py-2 text-sm text-gray-500">Price</th>
              <th className="px-3 py-2 text-sm text-gray-500">Stock</th>
              <th className="px-3 py-2 text-sm text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {visible.map((p) => (
              <tr key={p.id}>
                <td className="px-3 py-2">
                  <Link href={`/products/${p.id}`} className="text-blue-600 hover:underline">{p.name}</Link>
                </td>
                <td className="px-3 py-2">₹{p.price}</td>
                <td className="px-3 py-2">{p.stock}</td>
                <td className="px-3 py-2">
                  <span className={`px-2 py-1 rounded text-xs ${p.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {p.stock > 0 ? 'In stock' : 'Out of stock'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">Page {page} of {pages || 1}</div>
        <div className="flex gap-2">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="px-3 py-1 border rounded disabled:opacity-50">Prev</button>
          <button onClick={() => setPage((p) => Math.min(pages || 1, p + 1))} disabled={page === pages || pages === 0} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
        </div>
      </div>
    </div>
  );
}
