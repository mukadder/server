const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');
// generates a new application all the route handesrs will be associateed with app.
//second argument is arrow function gets called by express when incoming request hits /
// create new instance of google strategy
// passport use is generate registry .passport make use of google strategy
// googelstrategy need client id and client secret. set up your app with google
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleId: profile.id }).save();
    }
  )
);