// app/products/page.tsx
"use client";

import Sidebar from '../../components/layout/Sidebar';
import Topbar from '../../components/layout/Topbar';
import ProductsTable from '../../components/tables/ProductsTable';
import AddProductModal from '../../components/products/AddProductModal';
import { getMockProducts } from '../../lib/mockData';
import { useState } from 'react';

export default function ProductsPage() {
  const initial = getMockProducts();
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 min-h-screen flex flex-col">
        <Topbar />
        <main className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Products</h2>
            <div>
              <button
                onClick={() => setShowAdd(true)}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              >
                + Add Product
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-sm">
            <ProductsTable initialProducts={initial} />
          </div>

          <AddProductModal open={showAdd} onClose={() => setShowAdd(false)} />
        </main>
      </div>
    </div>
  );
}
