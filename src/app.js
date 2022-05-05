const express = require('express')
const logger = require('morgan')
const publicRouter = require('./routes/public')

const app = express()
const port = 3000

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', publicRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
