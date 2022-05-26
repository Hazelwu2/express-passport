// Model
const Post = require('../model/posts')
// Utils
const ApiState = require('../utils/apiState')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError');
const { successHandle } = require('../utils/resHandle.js')

const getPostList = catchAsync(async (req, res, next) => {
  // 成功
  successHandle({ res })
  // 錯誤
  return next(new AppError(ApiState.FIELD_MISSING))
})

module.exports = {
  getPostList,
}