import { Router } from "express";
import passport from "passport";
import isLoggedIn from  "./auth.js";

const router = Router();

// SIGNUP
router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
}));

// SINGIN
router.get('/signin', (req, res) => {
  res.render('empresa/empresa');
});

router.post('/signin', (req, res, next) => {
  // req.check('username', 'Username is Required').notEmpty();
  // req.check('password', 'Password is Required').notEmpty();
  // const errors = req.validationErrors();
  // if (errors.length > 0) {
  //   req.flash('message', errors[0].msg);
  //   res.redirect('/signin');
  // }
  passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

router.get('/profile', isLoggedIn, (req, res) => {
  res.send('profile');
});

export default router;