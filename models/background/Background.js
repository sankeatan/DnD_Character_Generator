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
  allowNull: true,
},
starting_equipment: {
  type: DataTypes.STRING,
  allowNull: false,
},
starting_money: {
  type: DataTypes.STRING,
  allowNull: true,
},
equipment_options: {
  type: DataTypes.STRING,
  allowNull: true,
},
skill_proficiencies: {
  type: DataTypes.STRING,
  allowNull: false,
},
tool_proficiencies: {
  type: DataTypes.STRING,
  allowNull: true,
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
