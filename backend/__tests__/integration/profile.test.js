const request = require('supertest')

const app = require('../../src/app').express
const truncate = require('../utils/truncate')

const ongPayload = require('../payloads/ong')

describe('Profile', () => {
  beforeEach(async () => {
    await truncate()
  })

  describe('GET: /profile', () => {
    it('should be able to list all incidents of a specific ONG', async () => {
      const ong = await request(app).post('/ongs').send(ongPayload)

      const response = await request(app)
        .get('/profile')
        .set('Authorization', ong.body.id)

      expect(response.status).toBe(200)
      expect(response.body).toEqual([])
    })
  })
})
