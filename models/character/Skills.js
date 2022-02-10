const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Skills extends Model {}

Project.init(
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
  freezeTableName: true,
  underscored: true,
  modelName: 'skills',
}
);

module.exports = Skills;