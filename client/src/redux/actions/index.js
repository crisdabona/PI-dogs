import axios from 'axios'

export const GET_DOGS = 'GET_DOGS'
export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const GET_ORIGINS = 'GET_ORIGINS'
export const CREATE_DOG = 'CREATE_DOG'

export const getDogs = () => {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/dogs`)
    return dispatch({
      type: GET_DOGS,
      payload: response.data
    })
  }
}

export const getByName = (name) => {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/dogs/?name=${name}`)
    return dispatch({
      type: GET_BY_NAME,
      payload: response.data
    })
  }
}

export const getTemperaments = () => {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/temperaments`)
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: response.data
    })
  }
}

export const getOrigins = () => {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/origins`)
    return dispatch({
      type: GET_ORIGINS,
      payload: response.data
    })
  }
}

export const createDog = (dogData) => {
  return async (dispatch) => {
    const response = await axios.post(`http://localhost:3001/dogs`, dogData)
    return dispatch({
      type: CREATE_DOG,
      payload: response.data
    })
  }
}
