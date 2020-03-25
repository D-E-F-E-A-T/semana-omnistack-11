const request = require('supertest')
const faker = require('faker')
const knex = require('knex')

const app = require('../../src/app').express

const config = require('../../knexfile')
const connection = knex(config.test)

describe('ONGs', () => {
  afterEach(async () => {
    await connection.raw('DELETE FROM incidents')
    await connection.raw('DELETE FROM ongs')
  })

  describe('POST: /ongs', () => {
    it('should be able to store a new ONG', async () => {
      const response = await request(app).post('/ongs').send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        whatsapp: faker.phone.phoneNumber(),
        city: faker.address.city(),
        uf: faker.address.stateAbbr()
      })

      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty('id')
    })
  })

  describe('GET: /ongs', () => {
    it('should be able to list all ONGs', async () => {
      const response = await request(app).get('/ongs')

      expect(response.status).toBe(200)
      expect(response.body).toEqual([])
    })
  })
})
