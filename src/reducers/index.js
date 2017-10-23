import { combineReducers } from 'redux'
import RoomsReducer from './rooms_reducer'

const rootReducer = combineReducers({
  rooms: RoomsReducer
})

export default rootReducer
