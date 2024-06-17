const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');

module.exports = function(passport) {
  passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: 'http://localhost:5000/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Google profile:', profile);
      return done(null, profile);
    })
  );

  passport.serializeUser((user, done) => {
    console.log('Serializing user:', user);
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    console.log('Deserializing user:', user);
    done(null, user);
  });
};
