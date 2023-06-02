import express from 'express'; 
import {getAllSocialAccounts, getSocialAccount, createSocialAccount, deleteSocialAccount, updateSocialAccount} from '../../controllers/socialAccount';

const router  = express.Router();

router.route('/').get(getAllSocialAccounts).post(createSocialAccount);
router.route('/:id').get(getSocialAccount).patch(updateSocialAccount).delete(deleteSocialAccount);

export default router;