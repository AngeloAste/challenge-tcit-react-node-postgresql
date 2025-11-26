import { query } from '../db/index.js';

export const Post = {
  async findAll() {
    const result = await query('SELECT * FROM posts ORDER BY created_at DESC');
    return result.rows.map(row => ({
      id: row.id,
      name: row.name,
      description: row.description,
      createdAt: row.created_at
    }));
  },

  async create(name, description) {
    const result = await query(
      'INSERT INTO posts (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    const row = result.rows[0];
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      createdAt: row.created_at
    };
  },

  async delete(id) {
    const result = await query(
      'DELETE FROM posts WHERE id = $1 RETURNING *',
      [id]
    );
    if (result.rows.length === 0) {
      return null;
    }
    const row = result.rows[0];
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      createdAt: row.created_at
    };
  }
};
