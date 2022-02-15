const router = require('express').Router();
const axios = require('axios');
const ClassDesc = require('../../models/ClassDesc');

router.get('/', async (req, res) => {
  await axios.get('https://www.dnd5eapi.co/api/classes')
    .then(function (response) {
      // handle success
      console.log(response.data.results);
      res.json(response.data.results);
      const classes = response.data.results;
      return classes;

    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
});

router.get('/:class', async (req, res) => {
  lowercaseSearch = (req.params.class).toLowerCase();
  const apiClassCall = `https://www.dnd5eapi.co/api/classes/${lowercaseSearch}`;
  await axios.get(apiClassCall)
  .then(function (response) {
      console.log(apiClassCall);
      const classCall = ClassDesc.findOne({ where: { class: req.params.class } })
      //classDescription = classCall.json();
      console.log(classCall);
      const classes = response;

      classCall.then(function (result) {
        response.data.description = result.dataValues.description

        // console.log(result.dataValues.description)
        console.log(response.data)
        return response.data
        // return classes;
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