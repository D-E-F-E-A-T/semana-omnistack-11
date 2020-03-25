const crypto = require('crypto')

const connection = require('../database/connection')

class OngController {
  async store (req, res) {
    const { name, email, whatsapp, city, uf } = req.body

    const id = crypto.randomBytes(4).toString('HEX')

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return res.status(201).json({ id })
  }
}

module.exports = new OngController()
