// imports
import './WeatherForecast.css'
import WeatherData from '../WeatherData/WeatherData.jsx'

const WeatherForecast = (props) => {
    return (
        <div className="weather">
          <WeatherData img={props.img} imgAlt={props.imgAlt} day={props.day} conditions={props.conditions} time={props.time} />
        </div>
    )
}

export default WeatherForecast