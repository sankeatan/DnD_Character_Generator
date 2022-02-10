const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Background extends Model {}

Background.init(
  {
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    },
name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
starting_proficiencies: {
  type: DataTypes.JSON,
  allowNull: false,
},
},
{
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'background',
}
);

module.exports = Background;