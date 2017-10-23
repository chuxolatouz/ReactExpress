export const FETCH_ROOMS = 'FETCH_ROOMS'

export function fetchRooms() {

  const a = {
    type: 'hi'
  }
  return {
    type: FETCH_ROOMS,
    payload: a
  }
}
