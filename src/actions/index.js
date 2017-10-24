import axios from 'axios'
export const FETCH_ROOMS = 'FETCH_ROOMS'
export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_TALKS = 'FETCH_TALKS'
export const SET_ROOM = 'SET_ROOM'
export const SET_TALK = 'SET_TALK'
export const SET_USER = 'SET_USER'


export async function fetchRooms() {
  const response = await axios.get('http://localhost:4000/rooms')
  return {
    type: FETCH_ROOMS,
    payload: response.data
  }
}

export async function fetchUsers() {
  const response = await axios.get('http://localhost:4000/users')
  return {
    type: FETCH_USERS,
    payload: response.data
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

export async function setUser(data) {
  const response = await axios.post('http://localhost:4000/users', data)
  return {
    type: SET_USER,
    payload: response.data
  }
}

export async function setRoom(data) {
  const response = await axios({
  method: 'post',
  url: 'http://localhost:4000/rooms',
  data: data,
  headers: {
    'Content-Type': 'application/json'
  }
});

  return {
    type: SET_ROOM,
    payload: response.data,
  }
}

export async function setTalk(data){
  const response = await axios.post('http://localhost:4000/talks', data)
  return {
    type: SET_TALK,
    payload: response.data,
  }
}
