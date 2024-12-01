import { db } from '../../../lib/db';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      await db.query('DELETE FROM products WHERE id = ?', [id]);
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  }
  if (req.method === 'PUT') {
    const { name, description, price } = req.body;
  
    try {
      await db.query('UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?', [name, description, price, id]);
      res.status(200).json({ id, name, description, price });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update product' });
    }
  }
  
}
