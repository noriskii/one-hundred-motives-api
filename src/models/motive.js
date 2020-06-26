const { Schema, model } = require('mongoose')

const MotiveSchema = new Schema(
  {
    motiveNumber: {
      type: Number,
      required: true
    },
    motive: {
      type: String,
      required: true
    },
    reward: {
      type: String,
      required: true
    },
    winner: {
      type: String,
      required: true
    },

  }
)

module.exports = model('Motive', MotiveSchema)