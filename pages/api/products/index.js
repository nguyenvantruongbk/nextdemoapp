import { db } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const [rows] = await db.query('SELECT * FROM products');
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  }
  if (req.method === 'POST') {
    const { name, description, price } = req.body;
    try {
      const [result] = await db.query('INSERT INTO products (name, description, price) VALUES (?, ?, ?)', [name, description, price]);
      res.status(201).json({ id: result.insertId, name, description, price });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add product' });
    }
  }
  
}
