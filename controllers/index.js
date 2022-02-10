const router = require('express').Router();

const apiRoute = require('./api');
const homeRoutes = require('./homeRoutes');
const characterRoutes = require('./characterRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoute);
router.use('/character', characterRoutes);

module.exports = router;
