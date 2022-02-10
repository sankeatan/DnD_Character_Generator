const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const dndRoutes = require('./dndRoutes');

router.use('/users', userRoutes);
router.use('/character', characterRoutes);
router.use('/dnd', dndRoutes);
module.exports = router;
