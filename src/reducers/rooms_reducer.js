import {
  FETCH_ROOMS,
  SET_ROOM,
 } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ROOMS:
      return action.payload
    case SET_ROOM:
      return [ action.payload, ...state ]

  }
  return state;
}
