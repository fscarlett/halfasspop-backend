import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('<p style="text-align: center;">List of RELEASES will be here</p>')
  // res.json({ message: 'List of artists' })
})

export default router
