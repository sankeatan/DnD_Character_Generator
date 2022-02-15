const router = require('express').Router();
const axios = require('axios');
const { Background } = require('../../models');

router.get('/', async (req, res) => {
try{
    const backgroundData = await Background.findAll();
    const backgrounds = backgroundData.get({ plain: true });
    console.log(backgrounds);
    res.json(backgroundData);

} catch (err) {
  res.status(500).json(err);
}
});

router.get('/:background', async (req, res) => {
  try{
      const backgroundData = await Background.findAll({
        where: {
          name: `${req.params.background}`,
        }
      });
      const backgrounds = backgroundData.get({ plain: true });
      console.log(backgrounds);
      res.json(backgroundData);
  
  } catch (err) {
    res.status(500).json(err);
  }
  });

module.exports = router;