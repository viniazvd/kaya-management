const User = require('../models/user')
const models = require('../../../infra/database/sequelize/models')
const signToken = require('../../../suport/auth/sign-token')

module.exports = async (req, res, next) => {
    const { email, password } = req.body

    const foundUser = await User.findOne({ email })
    if (foundUser) {
      return res.status(403).send({ error: 'E-mail já existe! Tente outro.' })
    }

    const newUser = new User({ email, password })
    await newUser.save()

    const token = signToken(newUser)

    res.status(200).send({ token })
  }
}