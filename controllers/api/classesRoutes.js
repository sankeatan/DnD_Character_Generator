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
  const apiClassCall = `https://www.dnd5eapi.co/api/classes/${req.params.class}`;
  console.log(apiClassCall);
  await axios.get(apiClassCall) 
  .then(function (response) {
  // handle success
  console.log(response.data);
  res.json(response.data);
  const classes = response.data;

  const characterDescriptionCall = ClassDesc.findOne({ where: { class: req.body.class } })

  console.log(characterDescriptionCall);

  return classes;
})


.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});
});
