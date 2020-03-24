const server = require('./app').express

server.listen(process.env.PORT || 3333)
