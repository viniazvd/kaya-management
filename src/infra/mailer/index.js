const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_AUTH_USER,
    pass: process.env.MAIL_AUTH_PASS
  }
})

transport.use('compile', hbs({
  viewEngine: 'handlebars',
  viewPath: path.resolve('./src/infra/mailer/templates/'),
  extName: '.html'
}))

module.exports = transport
