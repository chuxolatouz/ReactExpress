import RoomsModel from '../models/rooms'
import UsersModel from '../models/user'
export const FETCH_ROOMS = 'FETCH_ROOMS'
export const FETCH_USERS = 'FETCH_USERS'

export async function fetchRooms() {
  console.log(RoomsModel);
  const rooms = await RoomsModel.findAll()

  return {
    type: FETCH_ROOMS,
    payload: rooms
  }
}

export function fetchUsers() {
  const a = {
    type: 'hi'
  }

  return {
    type: FETCH_USERS,
    payload: a
  }
}
