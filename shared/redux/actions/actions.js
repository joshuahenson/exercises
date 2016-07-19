import * as ActionTypes from '../constants/constants';
import Config from '../../../server/config';
import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';

const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${Config.port}`) : '';

export function addPoll(poll) {
  return {
    type: ActionTypes.ADD_POLL,
    name: poll.name,
    title: poll.title,
    options: poll.options,
    slug: poll.slug,
    cuid: poll.cuid,
    _id: poll._id,
  };
}

export function addSelectedPoll(poll) {
  return {
    type: ActionTypes.ADD_SELECTED_POLL,
    poll,
  };
}

export function addPollRequest(poll) {
  return (dispatch) => {
    fetch(`${baseURL}/api/addPoll`, {
      method: 'post',
      body: JSON.stringify({
        poll: {
          name: poll.name,
          title: poll.title,
          options: poll.options,
        },
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then((res) => res.json()).then(res => {
      dispatch(addPoll(res.poll));
      dispatch(push(`/poll/${res.poll.slug}-${res.poll.cuid}`));
    });
  };
}

export function getPollRequest(poll) {
  return (dispatch) => fetch(`${baseURL}/api/getPoll?slug=${poll}`, {
    method: 'get',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then((response) => response.json()).then(res => dispatch(addSelectedPoll(res.poll)));
}

export function deletePoll(poll) {
  return {
    type: ActionTypes.DELETE_POLL,
    poll,
  };
}

export function addPolls(polls) {
  return {
    type: ActionTypes.ADD_POLLS,
    polls,
  };
}

export function fetchPolls() {
  return (dispatch) => fetch(`${baseURL}/api/getPolls`)
      .then((response) => response.json())
      .then((response) => dispatch(addPolls(response.polls)));
}

export function deletePollRequest(poll) {
  return (dispatch) => {
    fetch(`${baseURL}/api/deletePoll`, {
      method: 'post',
      body: JSON.stringify({
        pollId: poll._id,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(() => dispatch(deletePoll(poll)));
  };
}

export function showModal(bool) {
  return {
    type: ActionTypes.SHOW_MODAL,
    bool,
  };
}

export function vote(pollId, optionId) {
  return {
    type: ActionTypes.VOTE,
    pollId,
    optionId
  };
}

// export function voteRequest(optionId) {
//   return (dispatch) => {
//     fetch(`${baseURL}/api/vote`, {
//       method: 'post',
//       body: JSON.stringify({
//         option: {
//           _id: optionId,
//         },
//       }),
//       headers: new Headers({
//         'Content-Type': 'application/json',
//       }),
//     }).then((res) => res.json()).then(res => dispatch(addPoll(res.poll)));
//   };
// }
export function voteRequest(pollId, optionId) {
  return () => {
    fetch(`${baseURL}/api/vote`, {
      method: 'post',
      body: JSON.stringify({
        pollId,
        optionId
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
  };
}
