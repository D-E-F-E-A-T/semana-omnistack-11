const request = require('supertest')
const faker = require('faker')

const app = require('../../src/app').express
const truncate = require('../utils/truncate')

describe('Incidents', () => {
  afterEach(async () => {
    await truncate()
  })

  describe('POST: /incidents', () => {
    it('should be able to store a new incident', async () => {
      const ongId = await request(app).post('/ongs').send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        whatsapp: faker.phone.phoneNumber(),
        city: faker.address.city(),
        uf: faker.address.stateAbbr()
      })

      const response = await request(app)
        .post('/incidents')
        .set('Authorization', ongId)
        .send({
          title: faker.name.title(),
          description: faker.lorem.text(),
          value: faker.commerce.price()
        })

      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty('id')
    })
  })
})
