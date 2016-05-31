import * as ActionTypes from '../constants/constants';
import Config from '../../../server/config';
import fetch from 'isomorphic-fetch';

const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${Config.port}`) : '';

export function addPost(post) {
  return {
    type: ActionTypes.ADD_POST,
    name: post.name,
    title: post.title,
    content: post.content,
    slug: post.slug,
    cuid: post.cuid,
    _id: post._id,
  };
}

export function changeSelectedPost(slug) {
  return {
    type: ActionTypes.CHANGE_SELECTED_POST,
    slug,
  };
}

export function addPostRequest(post) {
  return (dispatch) => {
    fetch(`${baseURL}/api/addPost`, {
      method: 'post',
      body: JSON.stringify({
        post: {
          name: post.name,
          title: post.title,
          content: post.content,
        },
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then((res) => res.json()).then(res => dispatch(addPost(res.post)));
  };
}

export function addSelectedPost(post) {
  return {
    type: ActionTypes.ADD_SELECTED_POST,
    post,
  };
}

export function getPostRequest(post) {
  return (dispatch) => fetch(`${baseURL}/api/getPost?slug=${post}`, {
    method: 'get',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then((response) => response.json()).then(res => dispatch(addSelectedPost(res.post)));
}

export function deletePost(post) {
  return {
    type: ActionTypes.DELETE_POST,
    post,
  };
}

export function addPosts(posts) {
  return {
    type: ActionTypes.ADD_POSTS,
    posts,
  };
}

export function fetchPosts() {
  return (dispatch) => fetch(`${baseURL}/api/getPosts`)
      .then((response) => response.json())
      .then((response) => dispatch(addPosts(response.posts)));
}

export function deletePostRequest(post) {
  return (dispatch) => {
    fetch(`${baseURL}/api/deletePost`, {
      method: 'post',
      body: JSON.stringify({
        postId: post._id,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(() => dispatch(deletePost(post)));
  };
}

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

export function changeSelectedPoll(slug) {
  return {
    type: ActionTypes.CHANGE_SELECTED_POLL,
    slug,
  };
}

export function addPollRequest(poll) {
  return (dispatch) => {
    fetch(`${baseURL}/api/addPoll`, {
      method: 'poll',
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
    }).then((res) => res.json()).then(res => dispatch(addPoll(res.poll)));
  };
}

export function addSelectedPoll(poll) {
  return {
    type: ActionTypes.ADD_SELECTED_POLL,
    poll,
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
      method: 'poll',
      body: JSON.stringify({
        pollId: poll._id,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(() => dispatch(deletePoll(poll)));
  };
}
