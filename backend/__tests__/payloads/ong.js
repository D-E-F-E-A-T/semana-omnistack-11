const faker = require('faker')

module.exports = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  whatsapp: faker.phone.phoneNumber(),
  city: faker.address.city(),
  uf: faker.address.stateAbbr()
}
