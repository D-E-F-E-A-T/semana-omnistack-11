const knex = require('knex')

const config = require('../../knexfile')
const connection = knex(config.test)

module.exports = async () => {
  await connection.raw('DELETE FROM incidents')
  await connection.raw('DELETE FROM ongs')
}
