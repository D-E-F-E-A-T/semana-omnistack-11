const connection = require('../database/connection')

class IncidentController {
  async index (req, res) {
    const incidents = await connection('incidents').select('*')

    return res.status(200).json(incidents)
  }

  async store (req, res) {
    const { title, description, value } = req.body
    const ongId = req.headers.authorization

    const ongExists = await connection('ongs').where('id', ongId).select('*')

    if (!ongExists) {
      return res.status(401).json({ error: 'Operation not permitted.' })
    }

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id: ongId
    })

    return res.status(201).json({ id })
  }

  async delete (req, res) {
    const { id } = req.params
    const ongId = req.headers.authorization

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first()

    if (incident.ong_id !== ongId) {
      return res.status(401).json({ error: 'Operation not permitted.' })
    }

    await connection('incidents').where('id', id).delete()

    return res.status(204).send()
  }
}

module.exports = new IncidentController()
