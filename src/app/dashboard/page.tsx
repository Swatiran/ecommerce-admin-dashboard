// app/dashboard/page.tsx
import Topbar from '../../components/layout/Topbar';
import Sidebar from '../../components/layout/Sidebar';
import KPICard from '../../components/cards/KPI';
import ChartWrapper from '../../components/ui/ChartWrapper';
import ProductsTable from '../../components/tables/ProductsTable';
import { getMockSummary } from '../../lib/mockData';

export default async function DashboardPage() {
  // small server-side mock; could be replaced with fetch to your API
  const summary = getMockSummary();

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 min-h-screen flex flex-col">
        <Topbar />
        <main className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <KPICard title="Total Sales" value={summary.sales} />
            <KPICard title="Orders" value={summary.orders} />
            <KPICard title="Avg Order Value" value={summary.aov} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-medium mb-2">Sales Trend</h3>
              <ChartWrapper />
            </div>

            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-medium mb-2">Latest Products</h3>
              <ProductsTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
