// lib/mockData.ts
export function getMockSummary() {
  return {
    sales: '₹1,24,500',
    orders: 312,
    aov: '₹3,987',
  };
}

export function getChartData() {
  return [
    { day: 'Mon', sales: 1200 },
    { day: 'Tue', sales: 2100 },
    { day: 'Wed', sales: 800 },
    { day: 'Thu', sales: 1600 },
    { day: 'Fri', sales: 2500 },
    { day: 'Sat', sales: 1900 },
    { day: 'Sun', sales: 2700 },
  ];
}

export function getMockProducts() {
  return [
    { id: 'p1', name: 'Leather Bag', price: 2499, stock: 12 },
    { id: 'p2', name: 'Canvas Tote', price: 899, stock: 0 },
    { id: 'p3', name: 'Running Shoes', price: 3599, stock: 6 },
    { id: 'p4', name: 'Sports Watch', price: 4999, stock: 3 },
    { id: 'p5', name: 'Sunglasses', price: 1299, stock: 22 },
    { id: 'p6', name: 'Formal Belt', price: 699, stock: 15 },
  ];
}
