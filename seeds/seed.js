const sequelize = require('../config/connection');
const { User, Character } = require('../models');

const userData = require('./userData.json');
const charData = require('./character.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const character of charData) {

     await Character.create({
      ...character,
     });
 }

  process.exit(0);
};

seedDatabase();
