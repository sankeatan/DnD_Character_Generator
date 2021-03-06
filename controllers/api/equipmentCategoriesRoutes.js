const router = require('express').Router();
const axios = require('axios');

router.get('/', async (req, res) => {

    await axios.get('https://www.dnd5eapi.co/api/equipment-categories')
    .then(function (response) {
      // handle success
      console.log(response.data.results);
      res.json(response.data.results);
      const equipment = response.data.results;
      return equipment;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  });

router.get('/:id', async (req, res) => {

    await axios.get(`https://www.dnd5eapi.co/api/equipment-categories/${req.params.id}`)
    .then(function (response) {
      // handle success
      console.log(response.data.results);
      res.json(response.data.results);
      const equipment = response.data.results;
      return equipment;
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