import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddProduct() {
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' }); // Lưu thông tin sản phẩm mới.
  const router = useRouter();

  // Xử lý thêm sản phẩm.
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });
    if (res.ok) {
      setNewProduct({ name: '', description: '', price: '' }); // Reset form.
      router.push('/'); // Điều hướng về trang danh sách sản phẩm.
    }
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
        />
        <button type="submit">Add Product</button>
      </form>
      <button onClick={() => router.push('/')}>Back to Product List</button>
    </div>
  );
}
