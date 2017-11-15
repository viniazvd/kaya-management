module.exports = (server) => {
  server.get('/api/user', (req, res, next) => {
    res.send('initial page')
    console.log('initial page')
    next()
  })
}
