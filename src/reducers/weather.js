import { GET_CITY_REQUEST, GET_CITY_SUCCESS , GET_CITY_FAIL, GET_COORDS_REQUEST, GET_COORDS_SUCCESS, GET_COORDS_FAIL} from '../actions/WeatherActions'
const initialState = {
    weather: null,
    city: '',
    isFetching: false,
    error: '',
    coords: {
        lat: '',
        lon: ''
    }
}
export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CITY_REQUEST:
            return { ...state, city: action.payload, isFetching: true }

        case GET_CITY_SUCCESS:
            return { ...state, weather: action.payload, isFetching: false }

        case GET_CITY_FAIL:
            return { ...state, error: action.payload, weather: null, isFetching: false }

        case GET_COORDS_REQUEST:
            return { ...state, coords: action.payload, isFetching: true }

        case GET_COORDS_SUCCESS:
            return { ...state, weather: action.payload, isFetching: false }

        case GET_COORDS_FAIL:
            return { ...state, error: action.payload, weather: null, isFetching: false }

        default:
            return state
    }
}