const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

// Import routes
const weatherRoutes = require("./routes/weather")

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/weather", weatherRoutes)

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
