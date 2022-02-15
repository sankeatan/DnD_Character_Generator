const router = require('express').Router();
const { FantasyName } = require('../models');

router.get('/', async (req, res) => {
    const nameData = await FantasyName.findAll({
      });
  })

module.exports = router;