import {
  FETCH_TALKS,
  SET_TALK,
 } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TALKS:
      return action.payload
    case SET_TALK:
      return [ action.payload , ...state ]

  }
  return state;
}
