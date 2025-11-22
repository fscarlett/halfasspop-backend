import express from 'express'

import {
  createArtist,
  getAllArtists,
  updateArtist,
  deleteArtist,
} from '../controllers/artist.controllers.js'

const router = express.Router()

router.get('/', getAllArtists)
router.post('/', createArtist)
router.put('/:id', updateArtist)
router.delete('/:id', deleteArtist)

export default router
