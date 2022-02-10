const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/character/:id', async (req, res) => {
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