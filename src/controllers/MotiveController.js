const axios = require('axios')
const Motive = require('../models/motive')

module.exports = {

  async index(req, res) {
    const motives = await Motive.find()

    return res.json(motives)
  },

  async show(req, res) {
    const { motiveNumber } = req.params

    const motive = await Motive.findOne({ motiveNumber: motiveNumber })

    if (!motive) {
      return res.json({ 'error': 'Esse motivo ainda não existe!' })
    }

    return res.json(motive)
  }

}