const express = require('express')
const postRouter = require('./posts')

const publicRouter = express.Router()

publicRouter.use('/posts', postRouter)

module.exports = publicRouter