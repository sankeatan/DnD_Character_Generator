const router = require('express').Router();

const apiRoute = require('./api');
const homeRoutes = require('../db/homeRoutes');
const characterRoutes = require('./characterRoutes');
const fantasyNameRoutes = require('./fantasyNameRoutes')

router.use('/', homeRoutes);
router.use('/api', apiRoute);
router.use('/character', characterRoutes);
router.use('/fantasyName', fantasyNameRoutes);

module.exports = router;
