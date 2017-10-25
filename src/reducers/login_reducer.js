import {
  FETCH_LOGIN
 } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_LOGIN:
      return {...action.payload, ...state}
  }
  return state;
}
