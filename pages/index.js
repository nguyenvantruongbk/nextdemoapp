import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
            <span className="block text-gray-600 mt-2">${product.price}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
}
