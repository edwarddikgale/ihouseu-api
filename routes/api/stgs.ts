import express from 'express'; 
import {getAllStgs, getStg, createStg, deleteStg, updateStg, sortRated} from '../../controllers/stgs';

const router  = express.Router();

router.route('/').get(getAllStgs).post(createStg);
router.route('/:id').get(getStg).patch(updateStg).delete(deleteStg);
router.route('/sortrated').post(sortRated)

export default router;