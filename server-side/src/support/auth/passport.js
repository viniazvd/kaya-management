const passport = require('passport')
// const JwtStrategy = require('passport-jwt').Strategy
// const { ExtractJwt } = require('passport-jwt')
const LocalStrategy = require('passport-local').Strategy
const models = require('../../infra/database/sequelize/models')
// const isValidPassword = require('./isValidPassword')
const { isValidPassword } = require('../middlewares/encryption')

// passport.use(new JwtStrategy({
//   jwtFromRequest: ExtractJwt.fromHeader('x-access-token'),
//   secretOrKey: process.env.JWT_SECRET_TOKEN
// }, async (payload, done) => {
//   try {
//     const user = await models.user.findOne({ where: { email: payload.sub } })

//     if (!user) {
//       return done(null, false)
//     }

//     done(null, user)
//   } catch (error) {
//     done(error, false)
//   }
// }))

passport.use(new LocalStrategy({
  usernameField: 'email',
  session: false
}, async (email, password, done) => {
  try {
    // const user = await models.user.findOne({ email })
    const user = await models.user.findOne({ where: { email } })
    const currentPassword = user.dataValues.password

    if (!user) {
      return done(null, false)
    }

    // console.log('currentPassword', currentPassword, 'password', password)
    const isMatch = await isValidPassword(password, currentPassword)

    if (!isMatch) {
      return done(null, false)
    }

    done(null, user)
  } catch (error) {
    done(error, false)
  }
}))
