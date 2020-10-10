const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const uri = process.env.MONGO_CONNECTION;
const options = { useNewUrlParser: true, useUnifiedTopology: true }
module.exports = mongoose.connect(uri, options)
    .then(() => console.log("Connected successfully to MongoDB URI: " + uri))
    .catch(err => console.log(err))