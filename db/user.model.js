const path = require('path'),
  mongoose = require(path.resolve('./db/config')),
  Schema = mongoose.Schema,
  UserSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
  })

mongoose.model('User', UserSchema)
