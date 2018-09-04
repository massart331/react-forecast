export const GET_CITY_REQUEST = 'GET_CITY_REQUEST'
export const GET_CITY_SUCCESS = 'GET_CITY_SUCCESS'
export const GET_CITY_FAIL = 'GET_CITY_FAIL'
export const GET_COORDS_REQUEST = 'GET_COORDS_REQUEST'
export const GET_COORDS_SUCCESS = 'GET_COORDS_SUCCESS'
export const GET_COORDS_FAIL = 'GET_COORDS_FAIL'
import { getWeatherApi } from '../resources/openweathermap'

export function getWeather(city) {
    return dispatch => {
        dispatch({
            type: GET_CITY_REQUEST,
            payload: city,
        });

        if (city !== '') {
            getWeatherApi({ q: city }).then(res =>
                dispatch({
                    type: GET_CITY_SUCCESS,
                    payload: res.data,
                })
            ).catch(dispatch({
                type: GET_CITY_FAIL,
                payload: 'Wrong city name'
              })
            )
        } else {
            dispatch({
                type: GET_CITY_FAIL,
                payload: 'Field is empty'
            })
        }
    }
}

export function getWeatherCoords(coords) {
    return dispatch => {
        dispatch({
            type: GET_COORDS_REQUEST,
            payload: coords,
        });

        if (coords !== '') {
            getWeatherApi({ lat: coords.lat, lon: coords.lon }).then(res => {
                dispatch({
                    type: GET_COORDS_SUCCESS,
                    payload: res.data,
                })
            }).catch(() => {
                dispatch({
                    type: GET_COORDS_FAIL,
                    payload: 'En error occurred'
                })
            })
        }
    }
}