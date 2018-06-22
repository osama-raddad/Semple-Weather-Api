var express = require('express');
var router = express.Router();
const countries = require('countrycitystatejson')

router.get('/', (req, res) => res.send(countries.getCountries()
  .map((country) => {
    return {
      shortName: country.shortName,
      name: country.name,
      emoji: country.emoji
    }
  }))
);

module.exports = router;
