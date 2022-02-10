const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const classRoutes = require('./classRoutes');
const equipmentRoutes = require('./equipmentRoute');
const skillsRoutes = require('./skillsRoute');
const spellsRoutes = require('./spellsRoutes.js');

router.use('/users', userRoutes);
router.use('/character', characterRoutes);
router.use('/class', classRoutes);
router.use('/equipment', equipmentRoutes);
router.use('/skills', skillsRoutes);
router.use('/spells', spellsRoutes)

module.exports = router;
