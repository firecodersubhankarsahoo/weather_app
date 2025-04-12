import "./WeatherCard.css"

const WeatherCard = ({ city, temperature, condition, description, icon, humidity, windSpeed, feelsLike, pressure }) => {
  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{city}</h2>
        <div className="weather-icon">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
        </div>
      </div>

      <div className="weather-info">
        <div className="temperature">
          <span className="temp-value">{Math.round(temperature)}°C</span>
          <span className="condition">{condition}</span>
          <span className="description">{description}</span>
        </div>

        <div className="details">
          <div className="detail-item">
            <span className="detail-label">Feels Like</span>
            <span className="detail-value">{Math.round(feelsLike)}°C</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{humidity}%</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Wind</span>
            <span className="detail-value">{windSpeed} m/s</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Pressure</span>
            <span className="detail-value">{pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
