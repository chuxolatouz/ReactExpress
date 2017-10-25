import { combineReducers } from 'redux'
import RoomsReducer from './rooms_reducer'
import TalksReducer from './talks_reducer'
import UsersReducer from './users_reducer'
import LoginReducer from './login_reducer'

const rootReducer = combineReducers({
  rooms: RoomsReducer,
  talks: TalksReducer,
  users: UsersReducer,
  login: LoginReducer,
})

export default rootReducer
