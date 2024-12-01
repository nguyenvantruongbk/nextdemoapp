import mysql from 'mysql2/promise'; // Import thư viện mysql2 để hỗ trợ kết nối và xử lý MySQL bằng promise.
import dotenv from 'dotenv'; // Import thư viện dotenv để đọc biến môi trường từ file .env.

dotenv.config(); // Tải các biến môi trường từ tệp `.env`.

export const db = mysql.createPool({
  // Tạo một pool kết nối MySQL.
  host: process.env.DB_HOST,        // Địa chỉ server MySQL (ví dụ: localhost).
  user: process.env.DB_USER,        // Tên người dùng MySQL.
  password: process.env.DB_PASSWORD,// Mật khẩu MySQL.
  database: process.env.DB_NAME,    // Tên cơ sở dữ liệu cần kết nối.
  port: process.env.DB_PORT,        // Cổng MySQL (mặc định là 3306).
});
