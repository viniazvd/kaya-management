module.exports = fn => (...params) => fn(...params).catch(err => console.error(err))
