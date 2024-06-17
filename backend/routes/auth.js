const express = require('express');
const passport = require('passport');
const router = express.Router();

// @route GET /auth/google
// @desc Auth with Google
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// @route GET /auth/google/callback
// @desc Google auth callback
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/auth/success');
  }
);

// @route GET /auth/success
// @desc Success route
router.get('/success', (req, res) => {
  res.json({ success: true });
});

// @route GET /auth/logout
// @desc Logout user
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// @route GET /auth/dashboard
// @desc Dashboard route
router.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res.json({ authenticated: false });
  }
});

module.exports = router;
