// app/customers/page.tsx
import Sidebar from '../../components/layout/Sidebar';
import Topbar from '../../components/layout/Topbar';
import { getMockCustomers } from '../../lib/mockData';

export default function CustomersPage() {
  const customers = getMockCustomers();

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 min-h-screen flex flex-col">
        <Topbar />
        <main className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Customers</h2>
          <div className="bg-white p-4 rounded shadow-sm">
            <ul className="space-y-3">
              {customers.map((c) => (
                <li key={c.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-sm text-gray-600">{c.email}</div>
                  </div>
                  <div className="text-sm text-gray-600">Orders: {c.orders}</div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
