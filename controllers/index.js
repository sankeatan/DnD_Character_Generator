const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const characterRoutes = require('./characterRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/character', characterRoutes);

module.exports = router;
