const faker = require('faker')

module.exports = {
  title: faker.name.title(),
  description: faker.lorem.text(),
  value: faker.commerce.price()
}
