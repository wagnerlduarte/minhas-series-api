const express = require('express')
const cors = require('cors')
const requireDir = require('require-dir')

const app = express()
app.use(express.json())
app.use(cors())

requireDir('./src/app/models')

app.use('/', require('./src/routes'))

app.listen(process.env.PORT || 3001)
