const express = require('express');
const router = express.Router();
const cities = require('../cities.json')

router.get('/:CC', (req, res) => res.send(cities.filter((city) => req.params.CC.toUpperCase() === city.country.toUpperCase()).map((city) => {
    return {
        id: city.id,
        name: city.name
    }
})
)
);

module.exports = router;
