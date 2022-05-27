const jwt = require('jsonwebtoken')

const generateUrlJWT = (user, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_DAY
  })
  // 導向到前端
  res.redirect(`/auth/callback?token=${token}&name=${user.displayName}`)
}

module.exports = {
  generateUrlJWT
}