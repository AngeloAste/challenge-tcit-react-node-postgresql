import express from 'express';
import { getPosts, createPost, deletePost } from '../controllers/postController.js';

const router = express.Router();

router.get('/posts', getPosts);
router.post('/posts', createPost);
router.delete('/posts/:id', deletePost);

export default router;
