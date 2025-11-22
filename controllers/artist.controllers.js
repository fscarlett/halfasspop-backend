import mongoose from 'mongoose'
import Artist from '../models/artist.model.js'

export const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find({})
    res.status(200).json({ success: true, data: artists })
  } catch (error) {
    console.error('Error in Fetch artists.', error.message)
    res.status(500).json({ message: 'Server Error' })
  }
}

export const createArtist = async (req, res) => {
  const artist = req.body

  if (!artist.name) {
    return res
      .status(400)
      .json({ success: false, message: 'Name is required.' })
  }

  const newArtist = new Artist(artist)

  try {
    await newArtist.save()
    console.log('new Artist created:', newArtist.name)
    res.status(201).json({ success: true, data: newArtist })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
    console.error('Error in Create Artist.', error.message)
  }
}

export const updateArtist = async (req, res) => {
  const { id } = req.params
  const artist = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: 'Invalid artist id' })
  }

  try {
    const updatedArtist = await Artist.findByIdAndUpdate(id, artist, {
      new: true,
    })
    res.status(200).json({ success: true, data: updatedArtist })
    console.log('Artist updated:', updatedArtist.name)
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' })
    console.error('Error in Update Artist.', error.message)
  }
}

export const deleteArtist = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: 'Invalid artist id' })
  }

  try {
    await Artist.findByIdAndDelete(id)
    res.status(204).json({ success: true, message: 'Artist deleted' })
    console.log('Artist deleted:', id)
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' })
    console.error('Error in Delete artist.', error.message)
  }
}
