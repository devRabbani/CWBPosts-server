const Post = require('../models/post')
const slugify = require('slugify')

exports.create = (req, res) => {
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
