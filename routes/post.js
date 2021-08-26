const express = require('express')
const router = express.Router()

//import Controllers

const {
  createPost,
  getPost,
  singlePost,
  updatePost,
  deletePost,
  getName,
} = require('../controllers/post')

const { reqSignin } = require('../controllers/auth')

//routes
router.get('/rabbani', getName)
router.post('/post', reqSignin, createPost)
router.get('/post', getPost)
router.get('/post/:slug', singlePost)
router.put('/post/:slug', reqSignin, updatePost)
router.delete('/post/:slug', reqSignin, deletePost)

module.exports = router
