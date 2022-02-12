const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FantasyName extends Model {}

FantasyName.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
     name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'fantasyName',
  }
);

module.exports = FantasyName;