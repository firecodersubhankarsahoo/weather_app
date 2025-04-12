"use client"

import { useState, useEffect } from "react"
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import "./App.css"

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [city, setCity] = useState("")

  const fetchWeatherData = async (cityName) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`http://localhost:5000/weather?city=${cityName}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch weather data")
      }

      setWeatherData(data)
      setCity(cityName)
    } catch (err) {
      setError(err.message)
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  // Default city on first load
  useEffect(() => {
    fetchWeatherData("New York")
  }, [])

  // Determine weather condition for background
  const getWeatherClass = () => {
    if (!weatherData) return "default-bg"

    const condition = weatherData.weather[0].main.toLowerCase()

    switch (condition) {
      case "clear":
        return "sunny-bg"
      case "clouds":
        return "cloudy-bg"
      case "rain":
      case "drizzle":
        return "rainy-bg"
      case "snow":
        return "snowy-bg"
      case "thunderstorm":
        return "thunderstorm-bg"
      case "mist":
      case "fog":
      case "haze":
        return "misty-bg"
      default:
        return "default-bg"
    }
  }

  return (
    <div className={`app ${getWeatherClass()}`}>
      <div className="container">
        <h1>Weather Dashboard</h1>
        <SearchBar onSearch={fetchWeatherData} />

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading weather data...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && weatherData && (
          <WeatherCard
            city={city}
            temperature={weatherData.main.temp}
            condition={weatherData.weather[0].main}
            description={weatherData.weather[0].description}
            icon={weatherData.weather[0].icon}
            humidity={weatherData.main.humidity}
            windSpeed={weatherData.wind.speed}
            feelsLike={weatherData.main.feels_like}
            pressure={weatherData.main.pressure}
          />
        )}
      </div>
    </div>
  )
}

export default App
