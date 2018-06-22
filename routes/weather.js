const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:CI', (req, res) => {
    console.log(`api.openweathermap.org/data/2.5/weather?id=${req.params.CI}&units=metric&appid=5599158480bf29049b5043baa17c9e7a`)
    axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${req.params.CI}&units=metric&appid=5599158480bf29049b5043baa17c9e7a`)
        .then((response) => { 
            console.log(response)
            res.send(response.data) })
        .catch((error) => res.send(error));

});

module.exports = router;
