import { combineReducers } from 'redux'
import RoomsReducer from './reducer_weather'

const rootReducer = combineReducers({
  rooms: RoomsReducer
})
