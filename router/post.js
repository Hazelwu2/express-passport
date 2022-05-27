const express = require('express')
const router = express.Router()
// Controller
const postController = require('../controller/post')

// 取得按讚列表
router
  .get('/', postController.getPostList)

module.exports = router