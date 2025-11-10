// components/cards/KPI.tsx
'use client';
import React from 'react';

export default function KPICard({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="bg-white p-4 rounded shadow-sm flex flex-col">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold mt-2">{value}</div>
    </div>
  );
}
