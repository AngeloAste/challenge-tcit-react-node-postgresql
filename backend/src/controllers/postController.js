import { Post } from '../models/Post.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.error('Error al obtener posts:', error);
    res.status(500).json({ error: 'Error al obtener los posts' });
  }
};

export const createPost = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ error: 'El nombre y la descripción son obligatorios' });
    }

    const newPost = await Post.create(name, description);
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error al crear post:', error);
    res.status(500).json({ error: 'Error al crear el post' });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.delete(id);

    if (!deletedPost) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }

    res.json(deletedPost);
  } catch (error) {
    console.error('Error al eliminar post:', error);
    res.status(500).json({ error: 'Error al eliminar el post' });
  }
};
