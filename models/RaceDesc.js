const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RaceDesc extends Model {}

RaceDesc.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'raceDesc',
  }
);

module.exports = RaceDesc;