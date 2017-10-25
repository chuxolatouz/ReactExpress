import axios from 'axios'
export const FETCH_ROOMS = 'FETCH_ROOMS'
export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_TALKS = 'FETCH_TALKS'
export const SET_ROOM = 'SET_ROOM'
export const SET_TALK = 'SET_TALK'
export const SET_USER = 'SET_USER'
export const UPDATE_TALK = 'UPDATE_TALK'
export const FETCH_LOGIN = 'FETCH_LOGIN'

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

export async function fetchTalks() {
  const response = await axios.get('http://localhost:4000/talks')
  return {
    type: FETCH_TALKS,
    payload: response.data
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

export async function updateTalk(data){
  const response = await axios.put(`http://localhost:4000/talks/${data._id}`, data)
  return {
    type: UPDATE_TALK,
    payload: response.data
  }
}

export async function attemptLogin(data){
  const response = await axios.post(`http://localhost:4000/login`, data).catch(err => {
    return {
      type: FETCH_LOGIN,
      payload: err.response.data
    }
  })
  return {
    type: FETCH_LOGIN,
    payload: response.data
  }
}
