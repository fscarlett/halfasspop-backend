import mongoose from 'mongoose'

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: false,
    },
    featuredImage: {
      type: String,
      required: false,
    },
    metaTitle: {
      type: String,
      required: false,
    },
    metaKeywords: {
      type: String,
      required: false,
    },
    metaDescription: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
)

const Artist = mongoose.model('Artist', artistSchema)

export default Artist
