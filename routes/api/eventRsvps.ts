import express from 'express'; 
import {getAllEventRsvps, getEventRsvp, createEventRsvp, deleteEventRsvp, updateEventRsvp} from '../../controllers/eventRsvp';

const router  = express.Router();

router.route('/').get(getAllEventRsvps).post(createEventRsvp);
router.route('/:id').get(getEventRsvp).patch(updateEventRsvp).delete(deleteEventRsvp);

export default router;