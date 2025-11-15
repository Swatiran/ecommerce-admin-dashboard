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

export function getMockOrders() {
  return [
    { id: 'o1', customer: 'Riya Sharma', amount: 4999, status: 'pending' },
    { id: 'o2', customer: 'Amit Kumar', amount: 2499, status: 'shipped' },
    { id: 'o3', customer: 'Nina Patel', amount: 1299, status: 'delivered' },
    { id: 'o4', customer: 'John Doe', amount: 3599, status: 'pending' },
  ];
}

export function getMockCustomers() {
  return [
    { id: 'c1', name: 'Riya Sharma', email: 'riya@example.com', orders: 3 },
    { id: 'c2', name: 'Amit Kumar', email: 'amit@example.com', orders: 1 },
    { id: 'c3', name: 'Nina Patel', email: 'nina@example.com', orders: 5 },
  ];
}
