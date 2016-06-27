import expect from 'expect';
import rootReducer from '../redux/reducers/index';
import deepFreeze from 'deep-freeze';
import * as ActionTypes from '../redux/constants/constants';

describe('reducer tests', () => {
  it('action ADD_POLL is working', () => {
    const stateBefore = { polls: ['foo'], poll: null, showModal: false };
    const stateAfter = { polls: [{
      name: 'prank',
      title: 'first poll',
      options: [{ option: 'train', votes: 0 }, { option: 'bike', votes: 1 }],
      _id: null,
      cuid: null,
      slug: 'first-poll',
    }, 'foo'], poll: null, showModal: false };

    const action = {
      type: ActionTypes.ADD_POLL,
      name: 'prank',
      title: 'first poll',
      options: [{ option: 'train', votes: 0 }, { option: 'bike', votes: 1 }],
      _id: null,
      cuid: null,
      slug: 'first-poll',
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(stateAfter).toEqual(rootReducer(stateBefore, action));
  });

  it('action ADD_SELECTED_POLL is working', () => {
    const stateBefore = {
      polls: [{
        name: 'prank',
        title: 'first poll',
        options: [{ option: 'train', votes: 0 }, { option: 'bike', votes: 1 }],
        _id: null,
        slug: 'first-poll',

      }],
      poll: null,
      showModal: false
    };

    const stateAfter = {
      polls: [{
        name: 'prank',
        title: 'first poll',
        options: [{ option: 'train', votes: 0 }, { option: 'bike', votes: 1 }],
        _id: null,
        slug: 'first-poll',
      }],
      poll: {
        name: 'prank',
        title: 'first poll',
        options: [{ option: 'train', votes: 0 }, { option: 'bike', votes: 1 }],
        _id: null,
        slug: 'first-poll',
      },
      showModal: false
    };

    const action = {
      type: ActionTypes.ADD_SELECTED_POLL,
      poll: {
        name: 'prank',
        title: 'first poll',
        options: [{ option: 'train', votes: 0 }, { option: 'bike', votes: 1 }],
        _id: null,
        slug: 'first-poll',
      },
    };

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(stateAfter).toEqual(rootReducer(stateBefore, action));
  });
});
