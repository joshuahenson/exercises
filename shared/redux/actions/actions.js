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

export function requestLogin(creds) {
  return {
    type: ActionTypes.REQUEST_LOGIN,
    isFetching: true,
    isAuthenticated: false,
    creds,
  };
}

export function loginSuccess(user) {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    token: user.token,
  };
}

export function loginFailure(message) {
  return {
    type: ActionTypes.LOGIN_FALIURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
}

export function requestCheckToken() {
  return {
    type: ActionTypes.REQUEST_CHECK_TOKEN,
    isFetching: true,
    isAuthenticated: false
  };
}

export function tokenValid() {
  return {
    type: ActionTypes.TOKEN_VALID,
    isFetching: false,
    isAuthenticated: true
  };
}

export function tokenInvalid() {
  return {
    type: ActionTypes.TOKEN_INVALID,
    isFetching: false,
    isAuthenticated: false
  };
}

export function checkToken(sToken) {
  return (dispatch) => {
    const token = typeof window === 'undefined' ? sToken : localStorage.getItem('token');

    if (!token) {
      return Promise.resolve(dispatch(tokenInvalid()));
    }

    dispatch(requestCheckToken());
    return fetch(`${baseURL}/auth/me`, {
      method: 'GET',
      credentials: 'same-origin',
      headers: new Headers({
        Authorization: `JWT ${token}`
      })
    })
        .then((response) => {
          if (response.status === 401) {
            dispatch(tokenInvalid());
            return Promise.reject();
          }
          return response.json();
        })
        .then((response) => {
          const { user } = response;
          if (!user.ok) {
            dispatch(tokenInvalid());
            return Promise.reject();
          }

          dispatch(tokenValid());
        })
        .catch((err) => {
          console.log(err);
        });
  };
}

export function loginUser(creds) {
  return (dispatch) => {
    dispatch(requestLogin(creds));
    return fetch(`${baseURL}/auth/login`, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(creds),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
    .then((response) => response.json())
    .then((response) => {
      const { user, message } = response;
      if (!user.ok) {
        dispatch(loginFailure(message));
        return Promise.reject(message);
      }

      localStorage.setItem('token', user.token);
      dispatch(loginSuccess(user));
    })
    .catch((err) => {
      console.log(err);
    });
  };
}
