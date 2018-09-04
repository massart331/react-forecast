const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
const appid = '1dc2ada252bea476ae33cdb4140262e2';
const units = 'Metric';
const defaultParams = { appid, units };
import axios from 'axios'

export function getWeatherApi(params = {}) {
  return axios.get(baseUrl, {
    params: Object.assign({}, params, defaultParams),
  })
}