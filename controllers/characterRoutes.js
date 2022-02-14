const router = require('express').Router();
const { Character } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/:user', withAuth, async (req, res) => {
  try {
    const characterData = await Character.findAll({
      where: {
        user_id: `${req.params.user}`,
      }
    });

    if (!characterData){
      res.render('characterSheet', {
        layout: 'characterBuilder',
        logged_in: req.session.logged_in
      })
    } else {
    const character = characterData.get({ plain: true });

    res.render('characterSheet', {
      layout: 'characterBuilder',
      ...character,
      logged_in: req.session.logged_in
    });
  } 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
    try {
      const characterData = await Character.findByPk(req.params.id);
  
      const character = characterData.get({ plain: true });
  
      res.render('project', {
        ...character,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;