import mongoose from 'mongoose'

const releaseSchema = new mongoose.Schema(
  {
    releaseId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist',
      required: true,
    },
    isRemix: {
      type: Boolean,
      required: false,
      default: false,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    coverImage: {
      type: String,
      required: false,
    },
    genre: {
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

const Release = mongoose.model('Release', releaseSchema)

export default Release
