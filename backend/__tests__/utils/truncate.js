const knex = require('knex')

const tables = [
  'ongs',
  'incidents'
]

module.exports = () => {
  return Promise.all(
    tables.map(table => {
      return knex.raw('truncate table ' + table + ' cascade')
    })
  )
}
