const express = require('express')
const router = express.Router()
const passport = require('passport')
const { generateUrlJWT } = require('../service/auth')

// Google 第三方登入
router
  .get('/google', passport.authenticate('google', {
    scope: ['email', 'profile']
  }))

// Google 第三方登入 callback
router.get('/google/callback',
  passport.authenticate('google', {
    session: false
  }),
  (req, res) => {
    // 返回網址
    generateUrlJWT(req.user, res)

    // 直接返回 json
    // res.send({
    //   status: 'success',
    //   message: 'Google登入成功',
    //   data: {
    //     googleId: req.user.id,
    //     name: req.user.displayName
    //   }
    // });
  }
)

router.get('/callback', async (req, res, next) => {
  res.status(200).json({
    message: 'Google登入成功',
    token: req.query.token,
    name: req.query.name,
  })
})


module.exports = router