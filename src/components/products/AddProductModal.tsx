// components/products/AddProductModal.tsx
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '../../lib/store';

export default function AddProductModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [stock, setStock] = useState<number | ''>('');
  const { products, setProducts } = useStore();
  const router = useRouter();

  if (!open) return null;

  function handleAdd() {
    if (!name || !price || !stock) return;
    const newP = {
      id: `p${Date.now()}`,
      name,
      price: Number(price),
      stock: Number(stock),
    };
    setProducts([newP, ...products]);
    onClose();
    // optional: navigate to product detail
    router.refresh();
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md bg-white rounded p-6">
        <h3 className="text-lg font-medium mb-4">Add Product</h3>
        <div className="space-y-3">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full px-3 py-2 border rounded" />
          <input value={price} onChange={(e) => setPrice(e.target.value === '' ? '' : Number(e.target.value))} placeholder="Price" className="w-full px-3 py-2 border rounded" />
          <input value={stock} onChange={(e) => setStock(e.target.value === '' ? '' : Number(e.target.value))} placeholder="Stock" className="w-full px-3 py-2 border rounded" />
          <div className="flex justify-end gap-2 mt-4">
            <button onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
            <button onClick={handleAdd} className="px-4 py-2 rounded bg-gray-800 text-white">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
