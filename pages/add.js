import { useState } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function AddProduct() {
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });
  const router = useRouter();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8080/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });
    if (res.ok) {
      setNewProduct({ name: '', description: '', price: '' });
      router.push('/');
    }
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleAddProduct} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </Layout>
  );
}
