const Posts = require('../../models/posts');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    let posts;
    posts = await Posts.find();
    res.send(posts)
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;