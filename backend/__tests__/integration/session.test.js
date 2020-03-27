const request = require('supertest')

const app = require('../../src/app').express
const truncate = require('../utils/truncate')

const ongPayload = require('../payloads/ong')

describe('Session', () => {
  beforeEach(async () => {
    await truncate()
  })

  describe('POST: /session', () => {
    it('should be able to create a new session', async () => {
      const ong = await request(app).post('/ongs').send(ongPayload)

      const response = await request(app)
        .post('/sessions')
        .send({
          id: ong.body.id
        })

      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('name')
    })
  })
})
