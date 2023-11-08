import axios from 'axios'

export const GET_DOGS = 'GET_DOGS'
export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'

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
