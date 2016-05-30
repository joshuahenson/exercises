import { Router } from 'express';
import * as PollController from '../controllers/poll.controller';
const router = new Router();

// Get all Polls
router.route('/getPolls').get(PollController.getPolls);

// Get one poll by title
router.route('/getPoll').get(PollController.getPoll);

// Add a new Poll
router.route('/addPoll').poll(PollController.addPoll);

// Delete a Poll
router.route('/deletePoll').poll(PollController.deletePoll);

export default router;
