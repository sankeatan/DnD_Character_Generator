const router = require('express').Router();



const abilityRoute = require('./abilityRoute');
const alignmentRoute = require('./alignmentRoute');
const backgroundRoutes = require('./backgroundsRoutes');
const characterRoutes = require('./characterRoutes');
const classesRoute = require('./classesRoute');
const equipmentRoute = require('./equipmentRoute');
const equipmentCategoriesRoutes = require('./equipmentCategoriesRoutes.js');
const languageRoute = require('./languageRoute');
const proficiencyRoute = require('./proficiencyRoute');
const skillsRoute = require('./skillsRoute');
const spellRoutes = require('./spellRoutes');
const userRoutes = require('./userRoutes');



router.use('/ability-scores', abilityRoute);
router.use('/alignment', alignmentRoute);
router.use('/background', backgroundRoutes);
router.use('/character', characterRoutes);
router.use('/classes', classesRoute);
router.use('/equipment', equipmentRoute);
router.use('/equipment-categories', equipmentCategoriesRoutes);
router.use('/languages', languageRoute);
router.use('/proficiencies', proficiencyRoute);
router.use('/skills', skillsRoute);
router.use('/spell', spellRoutes);

router.use('/users', userRoutes);











module.exports = router;
