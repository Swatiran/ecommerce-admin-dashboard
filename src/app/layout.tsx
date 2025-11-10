// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'E-Commerce Admin',
  description: 'Admin dashboard built with Next.js, TypeScript & Tailwind',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        <div className="flex min-h-screen">
          { /* Sidebar will be placed by page-level layout component */ }
          {children}
        </div>
      </body>
    </html>
  );
}
