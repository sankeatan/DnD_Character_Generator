const router = require('express').Router();
const axios = require('axios');

router.get('/', async (req, res) => {

    await axios.get('https://www.dnd5eapi.co/api/languages')
    .then(function (response) {
      // handle success
      console.log(response.data);
      res.json(response.data);
      const language = response.data;
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