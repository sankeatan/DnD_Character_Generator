const router = require('express').Router();
const axios = require('axios');

router.get('/', async (req, res) => {

    await axios.get('https://www.dnd5eapi.co/api/languages')
    .then(function (response) {
      // handle success
      console.log(response.data.results);
      res.json(response.data.results);
      const language = response.data.results;
      return language;
      
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