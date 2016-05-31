import { Router } from 'express';
import * as PollController from '../controllers/poll.controller';
const router = new Router();

// Get all Polls
router.route('/getPolls').get(PollController.getPolls);

// Get one poll by title
router.route('/getPoll').get(PollController.getPoll);

// Add a new Poll
router.route('/addPoll').post(PollController.addPoll);

// Delete a Poll
router.route('/deletePoll').post(PollController.deletePoll);

export default router;
