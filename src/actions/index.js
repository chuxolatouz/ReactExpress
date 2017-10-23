// import RoomsModel from '../models/rooms'
// import UsersModel from '../models/user'
export const FETCH_ROOMS = 'FETCH_ROOMS'
export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_TALKS = 'FETCH_TALKS'
export const SET_ROOM = 'SET_ROOM'
export const SET_TALK = 'SET_TALK'
export const SET_USER = 'SET_USER'


export async function fetchRooms() {
  const a = {
    type: 'hi'
  }
  return {
    type: FETCH_ROOMS,
    payload: a
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

export function fetchTalks() {
  const a = {
    type: 'hi'
  }

  return {
    type: FETCH_TALKS,
    payload: a
  }
}

export function setUser(data) {
  return {
    type: SET_USER,
    payload: data
  }
}

export function setRoom(data) {
  return {
    type: SET_ROOM,
    payload: data,
  }
}

export function setTalk(data){
  return {
    type: SET_TALK,
    payload: data,
  }
}
