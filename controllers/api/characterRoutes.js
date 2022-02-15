const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newCharacter = await Character.create({
      name: req.body.name,
      profile_pic: req.body.picture,
      lvl: 1,
      race: req.body.race,
      class: req.body.class,
      background: req.body.background,


      user_id: req.session.user_id,
    });

    res.status(200).json(newCharacter);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/:character', withAuth, async (req, res) => {
  try {
    const character = await Character.findOne({ where: {
      id: `${req.params.character}`,
    }
      name: req.body.name,
      profile_pic: req.body.picture,
      lvl: 1,
      race: req.body.race,
      class: req.body.class,
      background: req.body.background,
      

      user_id: req.session.user_id,
    });

    res.status(200).json(newCharacter);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const characterData = await Character.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!characterData) {
      res.status(404).json({ message: 'No character found with this id!' });
      return;
    }

    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
