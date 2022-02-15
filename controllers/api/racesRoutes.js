const router = require('express').Router();
const axios = require('axios');
const RaceDesc = require('../../models/RaceDesc');

router.get('/', async (req, res) => {
  await axios.get('https://www.dnd5eapi.co/api/races')
    .then(function (response) {
      // handle success
      const races = response.data.results;
      return races;

    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
});

router.get('/:race', async (req, res) => {
  lowercaseSearch = (req.params.race).toLowerCase();
  console.log(lowercaseSearch);
  const apiClassCall = `https://www.dnd5eapi.co/api/classes/${lowercaseSearch}`;
  await axios.get(apiClassCall)
  .then(function (response) {
      console.log(apiClassCall);
      const classCall = RaceDesc.findOne({ where: { class: req.params.race } })
      //classDescription = classCall.json();
      console.log(classCall);
      const classes = response;

      classCall.then(function (result) {
        response.data.description = result.dataValues.description

        return response.data
      })
    })


    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});

module.exports = router;