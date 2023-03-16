import express from 'express'; 
import {getAllIndicators, getIndicator, createIndicator, deleteIndicator, updateIndicator} from '../../controllers/indicators';

const router  = express.Router();

router.route('/').get(getAllIndicators).post(createIndicator);
router.route('/:id').get(getIndicator).patch(updateIndicator).delete(deleteIndicator);

export default router;