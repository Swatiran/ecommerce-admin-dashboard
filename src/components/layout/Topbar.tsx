// components/layout/Topbar.tsx
'use client';
import React from 'react';

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b">
      <div className="flex items-center gap-3">
        <button className="p-2 rounded hover:bg-gray-100">☰</button>
        <h1 className="text-lg font-semibold">E-Commerce Admin</h1>
      </div>

      <div className="flex items-center gap-4">
        <input
          className="px-3 py-2 border rounded-md hidden sm:inline-block"
          placeholder="Search..."
        />
        <button className="p-2 rounded hover:bg-gray-100">🔔</button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <div className="text-sm">
            <div className="font-medium">Swati R</div>
            <div className="text-xs text-gray-500">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}
