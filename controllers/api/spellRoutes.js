const router = require('express').Router();
const axios = require('axios');

router.get('/:spell', async (req, res) => {

    await axios.get(`https://www.dnd5eapi.co/api/spells/${req.params.spell}`)
    .then(function (response) {
      // handle success
      console.log(response.data);
      res.json(response.data);
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