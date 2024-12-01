import { useState, useEffect } from 'react'; // Import React hooks.

export default function Home() {
  const [products, setProducts] = useState([]); 
  // Tạo state `products` để lưu danh sách sản phẩm.

  useEffect(() => {
    // useEffect: Chạy một lần khi component được render.
    fetch('/api/products')
      // Gửi yêu cầu GET tới API `/api/products`.
      .then((res) => res.json()) // Chuyển đổi phản hồi từ JSON sang JavaScript object.
      .then((data) => setProducts(data)); 
      // Cập nhật state `products` với dữ liệu nhận được.
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          // Lặp qua danh sách sản phẩm và hiển thị từng sản phẩm.
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
