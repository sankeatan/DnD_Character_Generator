const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const classesRoute = require('./classesRoute');
const equipmentRoute = require('./equipmentRoute');
const skillsRoute = require('./skillsRoute');
const languageRoute = require('./languageRoute');
const alignmentRoute = require('./alignmentRoute');
const abilityRoute = require('./abilityRoute');
const proficiencyRoute = require('./proficiencyRoute');
const spellsRoute = require('./spellsRoute');

router.use('/users', userRoutes);
router.use('/character', characterRoutes);
router.use('/classes', classesRoute);
router.use('/equipment', equipmentRoute);
router.use('/skills', skillsRoute);
router.use('/languages', languageRoute);
router.use('/alignment', alignmentRoute);
router.use('/ability-scores', abilityRoute);
router.use('/proficiencies', proficiencyRoute);
router.use('/spells', spellsRoute);

module.exports = router;
