const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../model/user')

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3005/auth/google/callback"
},
  async (accessToken, refreshToken, profile, cb) => {
    // const user = await User.find({ googleId: profile.id })

    // if (!user) {
    //   // 建立新 User
    //   const newUser = await User.create({
    //     email: profile.emails[0].value,
    //     name: profile.displayName,
    //     password: profile.emails[0].value, // Middleware 會加密
    //     passwordConfirm: profile.emails[0].value,
    //     googleId: profile.id
    //   })
    //   return cb(null, newUser);
    // }

    return cb(null, profile);

  })
);


// cb 後會回到 authController Middleware