import express from 'express'; 
import {getAllInteractQueues, getInteractQueue, createInteractQueue, deleteInteractQueue, updateInteractQueue} from '../../controllers/interactQueue';

const router  = express.Router();

router.route('/').get(getAllInteractQueues).post(createInteractQueue);
router.route('/:id').get(getInteractQueue).patch(updateInteractQueue).delete(deleteInteractQueue);

export default router;