import axios from "axios"

const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/eyoshika780/players'


export const getAllPlayers = async () => {
  const { data } = await axios.get(APIURL)
  console.log('data', data)
  return data.data.players
}

export const getSinglePlayer = async (playerId) => {
  const { data } = await axios.get(APIURL + '/' + playerId)
  console.log('data', data)
  return data.data.player
}

export const addPlayer = async (player) => {
  await axios.post(APIURL, player)
}

export const deletePlayer = async (playerId) => {
  await axios.delete(APIURL + '/' + playerId)
}
