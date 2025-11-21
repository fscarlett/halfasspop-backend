import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'

import artistRoutes from './routes/artist.routes.js'
import releaseRoutes from './routes/release.routes.js'

dotenv.config()

connectDB()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<p style="text-align: center;">HAP API is running</p>')
})

app.use('/api/v1/artists', artistRoutes)
app.use('/api/v1/releases', releaseRoutes)

app.listen(5000, () => {
  connectDB()
  console.log(`Server is running on port ${PORT}`)
})
