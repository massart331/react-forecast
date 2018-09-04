import React, { PureComponent } from "react";
import PropTypes from 'prop-types'

export default class WeatherDisplay extends PureComponent {
  render() {
    const { weatherData } = this.props;
    if (!weatherData || [404, 401].includes(weatherData.cod)) return <div>Waiting for a city name</div>;
    const weather = weatherData.cod !== '404'? weatherData.weather[0] : '';
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <React.Fragment>
        {weatherData.cod !== 404 &&
            <div>
                <h2>
                    {weather.main} in {weatherData.name}
                    <img src={iconUrl} alt="" />
                </h2>
                <h3 className='temperature'>{weatherData.main.temp}°</h3>
                <p className='text'>Wind Speed: {weatherData.wind.speed} meter/sec</p>
                <p className='text'>Humidity: {weatherData.main.humidity}%</p>
            </div>
        }
      </React.Fragment>
    );
  }
}

WeatherDisplay.propTypes = {
    weatherData: PropTypes.shape({
        cod: PropTypes.number.isRequired,
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired,
            humidity: PropTypes.number.isRequired
        }),
        wind: PropTypes.shape({
            speed: PropTypes.number.isRequired
        }),
        name: PropTypes.string.isRequired
    }),
}