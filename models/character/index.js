const AbilityScores = require('./AbilityScores');
const Character = require('./Character');
const Alignment = require('./Alignment');
const Language = require('./Language');
const Proficiency = require('./Proficiency');
const Skills = require('./Skills');
const Equipment = require('./Equipment');

Character.hasOne(AbilityScores, {
  foreignKey: 'character_id',
  onDelete: 'CASCADE'
});

AbilityScores.belongsTo(Character, {
  foreignKey: 'character_id'
});

Character.hasOne(Alignment, {
  foreignKey: 'character_id',
  onDelete: 'CASCADE'
});

Alignment.belongsTo(Character, {
  foreignKey: 'character_id'
});

Character.hasMany(Language, {
  foreignKey: 'character_id',
  onDelete: 'CASCADE'
});

Language.belongsTo(Character, {
  foreignKey: 'character_id'
});

Character.hasMany(Proficiency, {
  foreignKey: 'character_id',
  onDelete: 'CASCADE'
});

Proficiency.belongsTo(Character, {
  foreignKey: 'character_id'
});

Character.hasOne(Skills, {
  foreignKey: 'character_id',
  onDelete: 'CASCADE'
});

Skills.belongsTo(Character, {
  foreignKey: 'character_id'
});

Character.hasMany(Equipment, {
  foreignKey: 'character_id',
  onDelete: 'CASCADE'
});

Equipment.belongsTo(Character, {
  foreignKey: 'character_id'
});


module.exports = { Character };
