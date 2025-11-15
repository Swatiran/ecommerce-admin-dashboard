// app/products/[id]/page.tsx
import Sidebar from '../../../components/layout/Sidebar';
import Topbar from '../../../components/layout/Topbar';
import { getMockProducts } from '../../../lib/mockData';
import ProductDetailClient from '../../../components/products/ProductDetailClient';

interface Props { params: any }

export default async function ProductDetail({ params }: Props) {
    // unwrap params (it's a Promise)
    const { id } = await params;

    // server-side fallback data (static mock)
    const serverProducts = getMockProducts();
    const serverProduct = serverProducts.find((p) => p.id === id) ?? null;

    return (
        <div className="flex w-full">
            <Sidebar />
            <div className="flex-1 min-h-screen flex flex-col">
                <Topbar />
                <main className="p-6">
                    {/* client component will try Zustand first, then serverProduct */}
                    <ProductDetailClient id={id} serverProduct={serverProduct} />
                </main>
            </div>
        </div>
    );
}
