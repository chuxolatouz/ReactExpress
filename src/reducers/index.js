import { combineReducers } from 'redux'
import RoomsReducer from './rooms_reducer'
import TalksReducer from './talks_reducer'
import UsersReducer from './users_reducer'

const rootReducer = combineReducers({
  rooms: RoomsReducer,
  talks: TalksReducer,
  users: UsersReducer
})

export default rootReducer
