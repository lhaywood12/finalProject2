const express = require('express')
const server = express()
const PORT = process.env.PORT || 3002

const helmet = require('helmet')
const cors = require('cors')

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))
const router = require('./routes/router')
server.use('/api', router)

server.listen(PORT, ()=> {
    console.log(`Not the port ${PORT} running...`)
})