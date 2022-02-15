const sequelize = require('../config/connection');
const { User, Character, FantasyName, ClassDesc, RaceDesc } = require('../models');

const userData = require('./userData.json');
const charData = require('./charData.json');
const nameData = require('./fantasyNames.json');
const raceData = require('./raceData.json');
const classData = require('./classData.json');


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

  for (const fantasyName of nameData) {
    await FantasyName.create({
      ...fantasyName,
    });
   }

  // const fantasyName = await FantasyName.bulkCreate(nameData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  const raceDesc = await RaceDesc.bulkCreate(raceData);
  
  for (const raceDesc of raceData) {
   await RaceDesc.bulkCreate({
     ...raceDesc,
   });
  }

  for (const classDesc of classData) {
    await ClassDesc.create({
      ...classDesc,
    });
   }

  // const classDesc = await ClassDesc.bulkCreate(classData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  process.exit(0);
};

seedDatabase();
