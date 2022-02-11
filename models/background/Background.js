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
languages: {
  type: DataTypes.STRING,
  allowNull: false,
},
starting_equipment: {
  type: DataTypes.STRING,
  allowNull: false,
},
equipment_options: {
  type: DataTypes.STRING,
  allowNull: false,
},
proficiencies: {
  type: DataTypes.STRING,
  allowNull: false,
},
feature: {
  type: DataTypes.TEXT,
  allowNull: false,
}
},
{
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'background',
}
);

module.exports = Background;
