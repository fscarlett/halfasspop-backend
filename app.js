import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>Hello, HAP World!</h1>')
})

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
