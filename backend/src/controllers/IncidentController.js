const connection = require('../database/connection')

class IncidentController {
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
