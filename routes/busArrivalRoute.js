const axios = require('axios');
const express = require('express');
const router = express.Router();
const config = require('./config');

router.get('/:busStopCode', async (req, res) => {
    axios.get(`${process.env.LTA_API}/BusArrivalv2?BusStopCode=${req.params.busStopCode}`, config)
        .then(response => res.json(response.data))
        .catch(_err => res.send({ "error": error }))
})

module.exports = router;