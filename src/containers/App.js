import React, { Component } from "react"
import { connect } from 'react-redux'
import WeatherDisplay from "../components/WeatherDisplayComponent"
import { getWeather, getWeatherCoords } from "../actions/WeatherActions"
import { randomizeGreeting } from '../utils/phrases'

class App extends Component {
  cityNameHandler = (e) => {
    e.preventDefault();
    const name = this.refs.cityName.value;
    this.props.getWeatherAction(name)
  }

  componentDidMount() {
      navigator.geolocation.getCurrentPosition(this.onCurrentPosition)
  }

  onCurrentPosition = position => {
    let { getWeatherByCoordsAction, weather } = this.props
    let { coords } = weather
    coords['lat'] = position.coords.latitude
    coords['lon'] = position.coords.longitude
    getWeatherByCoordsAction(coords)
  }

  render() {
    const { weather, error, isFetching } = this.props.weather
    const isNotCod401 = weather !== null && weather.cod !== 401
    return (
      <div>
        <header>
            <div className="resize">
                <h1>React + Redux Weather App</h1>
            </div>
        </header>
        <div className='content'>
            {isNotCod401 ? <div className={"background " + weather.weather[0].main + Math.floor(Math.random() * 2)} /> : ''}
            <div className="resize">
                <div className='content__form'>
                  <form action="" onSubmit={this.cityNameHandler}>
                    <input type="text" name="city" placeholder="City name" ref="cityName" className='cityName' />
                    <input type="submit" value=""/>
                      {
                          !weather && <p className='error'>{error}</p>
                      }
                    <div className="formBackground" />
                  </form>
                </div>
                {isFetching ? <p>Loading...</p> :
                    <div className='content__result'>
                        <WeatherDisplay weatherData={weather}/>
                        {isNotCod401 ? <div className="hint"><p>{randomizeGreeting()}<br/>It's {weather.weather[0].description} today.</p></div> : ''}
                    </div>
                }
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({
        weather: store.weather
})
const mapDispatchToProps = dispatch => ({
        getWeatherAction: city => dispatch(getWeather(city)),
        getWeatherByCoordsAction: coords => dispatch(getWeatherCoords(coords))
})
export default connect(mapStateToProps,mapDispatchToProps)(App)