const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.URL,{ useNewUrlParser : true });
const connection = mongoose.connection;

console.log('Database connection has completed')
   
