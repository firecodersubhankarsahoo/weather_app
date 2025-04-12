const express = require("express")
const axios = require("axios")
const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const { city } = req.query

    if (!city) {
      return res.status(400).json({ message: "City parameter is required" })
    }

    const API_KEY = process.env.OPENWEATHER_API_KEY

    if (!API_KEY) {
      return res.status(500).json({ message: "API key not configured" })
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    )

    res.json(response.data)
  } catch (error) {
    console.error("Error fetching weather data:", error.response?.data || error.message)

    if (error.response && error.response.data) {
      return res.status(error.response.status).json({
        message: error.response.data.message || "Error fetching weather data",
      })
    }

    res.status(500).json({ message: "Server error" })
  }
})

module.exports = router
