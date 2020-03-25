const request = require('supertest')
const faker = require('faker')

const app = require('../../src/app').express

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
