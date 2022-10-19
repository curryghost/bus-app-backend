const axios = require('axios');
const express = require('express');
const router = express.Router();
const config = require('./config')

router.get('/', async (_req, res) => {
    const data = []
    for (let i = 0; i < 11; i++) {
        const res = await axios.get(`${process.env.LTA_API}/BusStops?$skip=${i * 500}`, config)
        data.push(...res.data.value)
    }
    res.json(data);
})

module.exports = router;