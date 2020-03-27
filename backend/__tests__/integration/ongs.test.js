const request = require('supertest')

const app = require('../../src/app').express
const truncate = require('../utils/truncate')

const ongPayload = require('../payloads/ong')

describe('ONG', () => {
  beforeEach(async () => {
    await truncate()
  })

  describe('POST: /ongs', () => {
    it('should be able to store a new ONG', async () => {
      const response = await request(app).post('/ongs').send(ongPayload)

      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty('id')
      expect(response.body.id).toHaveLength(8)
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
