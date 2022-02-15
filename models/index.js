const User = require('./User');
const Character = require('./Character');
const AbilityScores = require('./AbilityScores');
const ClassDesc = require('./ClassDesc');
const RaceDesc = require('./RaceDesc');
const FantasyName = require('./FantasyName')

User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id'
});


Character.hasOne(AbilityScores, {
  foreignKey: 'character_id',
  onDelete: 'CASCADE'
});

AbilityScores.belongsTo(Character, {
  foreignKey: 'character_id'
});

module.exports = { User, Character, AbilityScores, ClassDesc, RaceDesc, FantasyName };
