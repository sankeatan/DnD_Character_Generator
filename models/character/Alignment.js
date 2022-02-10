const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Alignment extends Model {}

Alignment.init(
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
},
{
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'alignment',
}
);

module.exports = Alignment;