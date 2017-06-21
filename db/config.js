require('dotenv').config()
const mongoose = require('mongoose'),
  host = process.env.DB_HOST,
  name = process.env.DB_NAME

const db = mongoose.connect(`mongodb://${host}/${name}`).connection

db.once('open', function () {
  console.log('CONNECTED')
})

module.exports = mongoose
