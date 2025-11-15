// app/auth/login/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // very small mock auth - in real app use NextAuth / Clerk / Firebase
    if (email && pwd) {
      // store a flag in localStorage
      localStorage.setItem('isLoggedIn', '1');
      router.push('/dashboard');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form onSubmit={handleLogin} className="max-w-md w-full bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Sign in</h2>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 border rounded mb-3" />
        <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" placeholder="Password" className="w-full px-3 py-2 border rounded mb-4" />
        <button type="submit" className="w-full px-4 py-2 bg-gray-800 text-white rounded">Sign in</button>
      </form>
    </div>
  );
}
