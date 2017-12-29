module.exports = app => (...middlewares) =>
  middlewares.forEach(middleware => app.use(middleware))
