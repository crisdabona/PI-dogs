import { GET_DOGS, GET_BY_NAME, GET_TEMPERAMENTS, GET_ORIGINS, CREATE_DOG} from "../actions"

let initialState = {allDogs: [], dogsCopy: [], temperaments: [], origins: []}

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

    case GET_ORIGINS:
      return{
        ...state,
        origins: action.payload,
      }
    
    case CREATE_DOG:
      return{
        ...state,
        allDogs: [...state.allDogs, action.payload]
      }
    

    default:
      return state
  }
}

export default rootReducer