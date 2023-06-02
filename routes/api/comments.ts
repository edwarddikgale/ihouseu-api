import express from 'express'; 
import {getAllComments, getComment, createComment, deleteComment, updateComment} from '../../controllers/comment';

const router  = express.Router();

router.route('/').get(getAllComments).post(createComment);
router.route('/:id').get(getComment).patch(updateComment).delete(deleteComment);

export default router;