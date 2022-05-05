const express = require('express')
const posts = require('../models/posts')

const postRouter = express.Router()


postRouter.get('/', (req, res) => {
  res.json(posts)
})

postRouter.post('/', (req, res) => {
  const newPost = req.body
  posts.push(newPost)
  res.json(newPost)
})

module.exports = postRouter