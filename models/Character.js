const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lvl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subclass: {
      type: DataTypes.STRING,
      allowNull: true
    },
    background_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'background',
        key: 'id',
      },
    }
    
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'character',
  }
);

module.exports = Character;
