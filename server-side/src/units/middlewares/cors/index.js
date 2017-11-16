const corsMiddleware = require('cors')

const cors = corsMiddleware({
  origin: '*',
  credentials: true,
  methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
  headers: 'Origin, X-Requested-With, Content-Type, Accept, x-acess-token'
})

module.exports = cors
