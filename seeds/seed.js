const sequelize = require('../config/connection');
const { User, Character, FantasyName } = require('../models');

const userData = require('./userData.json');
const charData = require('./charData.json');
const nameData = require('./fantasyNames.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const character of charData) {
    await Character.create({
      ...character,
      user_id: user[Math.floor(Math.random() * user.length)].id
    });
  }

  for (const name of nameData) {
    await FantasyName.create({
      ...name,
    });
  }

  process.exit(0);
};

seedDatabase();
