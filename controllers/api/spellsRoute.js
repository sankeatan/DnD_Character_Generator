const router = require('express').Router();
const axios = require('axios');

router.get('/', async (req, res) => {

    await axios.get('https://www.dnd5eapi.co/api/spells')
    .then(function (response) {
      // handle success
      console.log(response.data.results);
      res.json(response.data.results);
      const spells = response.data.results;
      return spells;
      
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