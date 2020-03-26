const connection = require('../database/connection')

class IncidentController {
  async index (req, res) {
    const incidents = await connection('incidents').select('*')

    return res.status(200).json(incidents)
  }

  async store (req, res) {
    const { title, description, value } = req.body
    const ongId = req.headers.authorization

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id: ongId
    })

    return res.status(201).json({ id })
  }
}

module.exports = new IncidentController()
