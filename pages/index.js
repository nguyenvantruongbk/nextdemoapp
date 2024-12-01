import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [products, setProducts] = useState([]); // Lưu danh sách sản phẩm.

  // Lấy danh sách sản phẩm từ API.
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  return (
    <div>
      <h1>Product List</h1>
      <Link href="/add">
        <button>Add Product</button>
      </Link>
      {/* Danh sách sản phẩm */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price}
            <br />
            {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
