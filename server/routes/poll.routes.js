import { Router } from 'express';
import * as PollController from '../controllers/poll.controller';
import passport from '../passport';
const router = new Router();

// Get all Polls
router.route('/getPolls').get(PollController.getPolls);

// Get one poll by title
router.route('/getPoll').get(PollController.getPoll);

// Add a new Poll
router.route('/addPoll')
  .post(passport.authenticate('jwt', { session: false }), PollController.addPoll);

// Delete a Poll
router.route('/deletePoll')
  .post(passport.authenticate('jwt', { session: false }), PollController.deletePoll);

// Vote on Poll option
router.route('/vote').post(PollController.vote);

export default router;
