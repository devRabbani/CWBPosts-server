const express = require('express')
const router = express.Router()

//import Controllers

const {
  createPost,
  getPost,
  singlePost,
  updatePost,
  deletePost,
} = require('../controllers/post')

//routes

router.post('/post', createPost)
router.get('/post', getPost)
router.get('/post/:slug', singlePost)
router.put('/post/:slug', updatePost)
router.delete('/post/:slug', deletePost)

module.exports = router
