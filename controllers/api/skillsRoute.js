const router = require('express').Router();
const axios = require('axios');

router.get('/', async (req, res) => {

    await axios.get('https://www.dnd5eapi.co/api/skills')
    .then(function (response) {
      // handle success
      console.log(response.data.results);
      res.json(response.data.results);
      const skills = response.data.results;
      return skills;
      
    })
  
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  });


router.get('/:skill', async (req, res) => {

  await axios.get(`https://www.dnd5eapi.co/api/${req.params.skill}`)
  .then(function (response) {
    // handle success
    console.log(response.data.results);
    res.json(response.data.results);
    const skills = response.data.results;
    return skills;
      
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

