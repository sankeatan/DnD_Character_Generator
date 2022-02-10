const AbilityScores = require('./AbilityScores');
const Character = require('./Character');
const Alignment = require('./Alignment');
const Languages = require('./Languages');
const Proficiencies = require('./Proficiencies');
const Skills = require('./Skills');

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

Character.hasOne(Languages, {
  foreignKey: 'character_id',
  onDelete: 'CASCADE'
});

Languages.belongsTo(Character, {
  foreignKey: 'character_id'
});

Character.hasOne(Proficiencies, {
  foreignKey: 'character_id',
  onDelete: 'CASCADE'
});

Proficiencies.belongsTo(Character, {
  foreignKey: 'character_id'
});

Character.hasOne(Skills, {
  foreignKey: 'character_id',
  onDelete: 'CASCADE'
});

Skills.belongsTo(Character, {
  foreignKey: 'character_id'
});


module.exports = { User, Project };
