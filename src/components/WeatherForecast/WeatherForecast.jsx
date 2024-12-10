// imports
import './WeatherForecast.css'
import WeatherData from '../WeatherData/WeatherData.jsx'

const WeatherForecast = (props) => {
    return (
        <div className="weather">
          <WeatherData img={props.weatherForecast.img} imgAlt={props.weatherForecastimgAlt} day={props.weatherForecast.day} conditions={props.weatherForecast.conditions} time={props.weatherForecast.time} />
        </div>
    )
}

export default WeatherForecast