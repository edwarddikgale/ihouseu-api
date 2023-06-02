import express from 'express'; 
import {getAllPostLogs, getPostLog, createPostLog, deletePostLog, updatePostLog} from '../../controllers/postLog';

const router  = express.Router();

router.route('/').get(getAllPostLogs).post(createPostLog);
router.route('/:id').get(getPostLog).patch(updatePostLog).delete(deletePostLog);

export default router;