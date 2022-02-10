const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Equipment extends Model {}

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
name: {
    type: DataTypes.STRING,
    allowNull: false
}
},
{
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'equipment',
}
);

module.exports = Equipment;