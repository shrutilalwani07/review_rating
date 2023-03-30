const express =require('express')
require('./model/config');
require('dotenv').config()
const userRouter = require('./router/userRouter')

const app = express()

app.use(express.json())

app.use('/', userRouter)


console.log('**',process.env.port)
app.listen(9000, (req,res)=>{
    console.log('server is running on port no : 9000')
})
