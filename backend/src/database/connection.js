const knex = require('knex')
const config = require('../../knexfile')

const connection = process.env.NODE_ENV === 'test'
  ? knex(config.test)
  : knex(config.development)

module.exports = connection
