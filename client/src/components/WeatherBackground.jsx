import "./WeatherBackground.css"

const WeatherBackground = ({ weatherCondition }) => {
  const getBackgroundClass = () => {
    if (!weatherCondition) return "default-background"

    switch (weatherCondition.toLowerCase()) {
      case "clear":
        return "sunny-background"
      case "clouds":
        return "cloudy-background"
      case "rain":
      case "drizzle":
        return "rainy-background"
      case "snow":
        return "snowy-background"
      case "thunderstorm":
        return "thunderstorm-background"
      case "mist":
      case "fog":
      case "haze":
        return "misty-background"
      default:
        return "default-background"
    }
  }

  return (
    <div className={`weather-background ${getBackgroundClass()}`}>
      {weatherCondition === "Clear" && <div className="sun"></div>}

      {weatherCondition === "Clouds" && (
        <>
          <div className="cloud cloud1"></div>
          <div className="cloud cloud2"></div>
          <div className="cloud cloud3"></div>
        </>
      )}

      {(weatherCondition === "Rain" || weatherCondition === "Drizzle") && (
        <div className="rain">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              style={{
                animationDuration: `${0.5 + Math.random() * 0.3}s`,
                animationDelay: `${Math.random() * 2}s`,
                left: `${Math.random() * 100}%`,
              }}
            ></span>
          ))}
        </div>
      )}

      {weatherCondition === "Snow" && (
        <div className="snow">
          {[...Array(50)].map((_, i) => (
            <span
              key={i}
              style={{
                animationDuration: `${2 + Math.random() * 2}s`,
                animationDelay: `${Math.random() * 2}s`,
                left: `${Math.random() * 100}%`,
              }}
            ></span>
          ))}
        </div>
      )}

      {weatherCondition === "Thunderstorm" && (
        <>
          <div className="cloud cloud1"></div>
          <div className="cloud cloud2"></div>
          <div className="lightning"></div>
        </>
      )}
    </div>
  )
}

export default WeatherBackground
