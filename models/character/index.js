const AbilityScores = require('./AbilityScores');
const Character = require('../Character');
const Proficiency = require('./Proficiency');
const Skills = require('./Skills');
const Equipment = require('./Equipment');
const Background = require('../background-api/Background');

Character.hasOne(AbilityScores, {
  foreignKey: 'character_id',
  onDelete: 'CASCADE'
});

AbilityScores.belongsTo(Character, {
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

Character.hasOne(Background, {
  foreignKey: 'character_id',
  onDelete: 'CASCADE'
});


module.exports = { Character };
