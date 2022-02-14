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
    profile_pic: {
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
    alignment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    languages: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    background: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    proficiencies: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    equipment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    feats: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'character',
  }
);

module.exports = Character;
