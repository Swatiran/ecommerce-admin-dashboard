// components/tables/ProductsTable.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { getMockProducts } from '../../lib/mockData';

export default function ProductsTable() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const data = getMockProducts();
    setProducts(data);
  }, []);

  return (
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
          {products.slice(0, 6).map((p) => (
            <tr key={p.id}>
              <td className="px-3 py-2">{p.name}</td>
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
  );
}
