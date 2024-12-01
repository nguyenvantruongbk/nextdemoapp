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
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p>{product.description}</p>
            <span className="text-gray-600">${product.price}</span>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
