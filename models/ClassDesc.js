const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ClassDesc extends Model {}

ClassDesc.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'classDesc',
  }
);

module.exports = ClassDesc;