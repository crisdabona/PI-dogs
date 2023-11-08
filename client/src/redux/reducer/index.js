import { GET_DOGS, GET_BY_NAME, GET_TEMPERAMENTS} from "../actions"

let initialState = {allDogs: [], dogsCopy: [], temperaments: []}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return{
        ...state,
        allDogs: action.payload,
        dogsCopy: action.payload
      }

    case GET_BY_NAME:
      return{
        ...state,
        allDogs: action.payload,
      }
    
    case GET_TEMPERAMENTS:
      return{
        ...state,
        temperaments: action.payload,
      }

    default:
      return state
  }
}

export default rootReducer