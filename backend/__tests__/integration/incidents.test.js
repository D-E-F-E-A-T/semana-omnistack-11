const request = require('supertest')

const app = require('../../src/app').express
const truncate = require('../utils/truncate')

const ongPayload = require('../payloads/ong')
const incidentPayload = require('../payloads/incident')

describe('Incidents', () => {
  beforeEach(async () => {
    await truncate()
  })

  describe('POST: /incidents', () => {
    it('should be able to store a new incident', async () => {
      const ong = await request(app).post('/ongs').send(ongPayload)

      const response = await request(app)
        .post('/incidents')
        .set('Authorization', ong.body.id)
        .send(incidentPayload)

      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty('id')
    })
  })

  describe('GET: /incidents', () => {
    it('should be able to list all incidents', async () => {
      const response = await request(app).get('/incidents')

      expect(response.status).toBe(200)
      expect(response.body).toEqual([])
    })
  })

  describe('DELETE: /incidents/:id', () => {
    it('sholud be able to delete a incident by id', async () => {
      const ong = await request(app).post('/ongs').send(ongPayload)

      const incident = await request(app)
        .post('/incidents')
        .set('Authorization', ong.body.id)
        .send(incidentPayload)

      const response = await request(app)
        .delete(`/incidents/${incident.body.id}`)
        .set('Authorization', ong.body.id)

      expect(response.status).toBe(204)
    })
  })
})
