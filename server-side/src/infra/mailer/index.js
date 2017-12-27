const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')
// console.log(path)

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'b7d377db087e00',
    pass: '39e533959e03e9'
  }
})

transport.use('compile', hbs({
  viewEngine: 'handlebars',
  viewPath: path.resolve('./src/infra/mailer/templates/'),
  extName: '.html'
}))

module.exports = transport
