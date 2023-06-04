import express from 'express'; 
import {getAllIhouseuUsers, getIhouseuUser, createIhouseuUser, deleteIhouseuUser, updateIhouseuUser, countIhouseuUsers} from '../../controllers/ihouseuUser';

const router  = express.Router();

router.route('/count').get(countIhouseuUsers);
router.route('/').get(getAllIhouseuUsers).post(createIhouseuUser);
router.route('/:id').get(getIhouseuUser).patch(updateIhouseuUser).delete(deleteIhouseuUser);

export default router;