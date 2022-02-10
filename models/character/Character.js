const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    lvl: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    background: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alignment: {
      type: DataTypes.STRING,
      allowNull: true
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
