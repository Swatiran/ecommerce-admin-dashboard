// components/products/ProductDetailClient.tsx
'use client';
import React from 'react';
import { useStore } from '../../lib/store';

export default function ProductDetailClient({
  id,
  serverProduct,
}: {
  id: string;
  serverProduct: any | null;
}) {
  const products = useStore((s: any) => s.products);
  // prefer the client store product (so added/edited items show up),
  // fallback to server-provided product (for initial mock items).
  const product = products.find((p: any) => p.id === id) ?? serverProduct;

  if (!product) {
    return <div className="bg-white p-6 rounded shadow-sm">Product not found</div>;
  }

  return (
    <div className="bg-white p-6 rounded shadow-sm">
      <div className="flex gap-6">
        <div className="w-48 h-48 bg-gray-100 rounded flex items-center justify-center">Image</div>
        <div>
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <div className="text-gray-600 mt-2">Price: ₹{product.price}</div>
          <div className="text-gray-600 mt-1">Stock: {product.stock}</div>
          <p className="mt-4 text-sm text-gray-700">
            This product comes from {products.find((p:any)=>p.id===id) ? 'client store' : 'server mock data'}.
          </p>
        </div>
      </div>
    </div>
  );
}
