const Post = require('../models/post')
const slugify = require('slugify')

exports.getName = (req, res) => {
  res.json({
    name: 'hello',
  })
}

exports.createPost = (req, res) => {
  const { title, content, user } = req.body
  const slug = slugify(title)

  //Validate
  switch (true) {
    case !title:
      return res.status(400).json({
        error: 'Title is required',
      })
      break
    case !content:
      return res.status(400).json({
        error: 'Content is required',
      })
      break

    default:
      break
  }

  Post.create({ title, content, user, slug }, (err, suc) => {
    if (err) {
      console.log(err)
      res.status(400).json({
        error: 'Duplicate post try another one',
      })
    }

    res.json(suc)
  })
}

exports.getPost = (req, res) => {
  Post.find({})
    .limit(10)
    .sort({ createdAt: -1 })
    .exec((error, data) => {
      if (error) console.log(error)
      res.json(data)
    })
}

exports.singlePost = (req, res) => {
  const { slug } = req.params
  Post.findOne({ slug }).exec((error, data) => {
    if (error) console.log(error)
    res.json(data)
  })
}

exports.updatePost = (req, res) => {
  const { slug } = req.params
  const { title, content, user } = req.body

  Post.findOneAndUpdate({ slug }, { title, content, user }, { new: true }).exec(
    (err, data) => {
      if (err) console.log('Error on update try again')
      res.json(data)
    }
  )
}

exports.deletePost = (req, res) => {
  const { slug } = req.params

  Post.findOneAndRemove({ slug }).exec((err, data) => {
    if (err) console.log('Error on delete try again')
    res.json({
      message: 'Deleted Succesfull',
    })
  })
}
