const connection = require('../../src/database/connection')

module.exports = async () => {
  await connection.raw('DELETE FROM incidents')
  await connection.raw('DELETE FROM ongs')
}
