const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class AbilityScores extends Model {}

Character.init(
  {
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    },
character_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'character',
        key: 'id',
      },
    },
str: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dex: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  con: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  int: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  wis: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cha: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'abilityscores',
}
);

module.exports = AbilityScores;