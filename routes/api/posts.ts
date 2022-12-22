import express from 'express'; 
import {getPosts, getPost, createPost, deletePost, updatePost} from '../../controllers/posts';

const router  = express.Router();

router.route('/').get(getPosts).post(createPost);
router.route('/:id').get(getPost).patch(updatePost).delete(deletePost);

export default router;