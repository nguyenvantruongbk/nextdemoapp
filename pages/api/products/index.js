import { db } from '../../../lib/db'; // Import kết nối MySQL đã cấu hình.

export default async function handler(req, res) {
  // Xử lý yêu cầu GET (lấy danh sách sản phẩm).
  if (req.method === 'GET') {
    try {
      const [rows] = await db.query('SELECT * FROM products');
      // Truy vấn cơ sở dữ liệu để lấy danh sách sản phẩm.
      res.status(200).json(rows);
      // Trả về danh sách sản phẩm với mã trạng thái HTTP 200 (OK).
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
      // Nếu có lỗi, trả về mã 500 cùng thông báo lỗi.
    }
  }

  // Xử lý yêu cầu POST (thêm sản phẩm mới).fff
  if (req.method === 'POST') {
    const { name, description, price } = req.body;
    // Lấy dữ liệu từ body của yêu cầu (name, description, price).
    try {
      const [result] = await db.query(
        'INSERT INTO products (name, description, price) VALUES (?, ?, ?)',
        [name, description, price]
      );
      // Chèn sản phẩm mới vào cơ sở dữ liệu. Dấu `?` là placeholder, các giá trị được gán từ mảng.
      res.status(201).json({
        id: result.insertId, // ID của sản phẩm mới được tạo.
        name,
        description,
        price,
      });
      // Trả về thông tin sản phẩm vừa được thêm với mã trạng thái HTTP 201 (Created).
    } catch (error) {
      res.status(500).json({ error: 'Failed to add product' });
      // Nếu có lỗi, trả về mã 500 cùng thông báo lỗi.
    }
  }

  // Nếu phương thức không được hỗ trợ.
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
