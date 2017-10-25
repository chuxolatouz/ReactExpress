import {
  FETCH_TALKS,
  SET_TALK,
  UPDATE_TALK,
 } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TALKS:
      return action.payload
    case SET_TALK:
      return [ action.payload , ...state ]
    case UPDATE_TALK:
      let talks = state.map( talk => {return (talk._id === action.payload._id ? action.payload : talk) })
      return talks
  }
  return state;
}
