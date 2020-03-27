const connection = require('../database/connection')

class ProfileController {
  async index (req, res) {
    const ongId = req.headers.authorization

    const incidents = await connection('incidents')
      .where('ong_id', ongId)
      .select('*')

    return res.status(200).json(incidents)
  }
}

module.exports = new ProfileController()
