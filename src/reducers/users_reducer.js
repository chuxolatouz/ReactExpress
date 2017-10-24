import {
  FETCH_USERS,
  SET_USER,
 } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return [ action.payload, ...state ]
    case SET_USER:
      return [ action.payload , ...state ]

  }
  return state;
}
