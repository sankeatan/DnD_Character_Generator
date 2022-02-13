const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  if (!req.session.logged_in){
    try {
      res.render('getStartedButton', {layout: "landingPage"});
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    try{
      res.render('home');
    } catch (err) {
      res.status(500).json(err);
    }

  }
})


// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  try {
    res.render('loginForm', {layout: "landingPage"});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  try {
    res.render('signUpForm', {layout: "landingPage"});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/home', withAuth, (req, res) => {
  try {
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/characterBuilder', (req, res) => {
  try {
    res.render('characterSheet', {layout: 'characterBuilder'});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
