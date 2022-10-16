const express = require('express');
const app = express();
const busStopRouter = require('./routes/busStopsRoute');
const busArrivalRouter = require('./routes/busArrivalRoute');

if (process.env.NODE_ENV == 'development') {
    const cors = require('cors');
    require('dotenv').config();
    app.use(cors());
}

app.use('/api/busstop', busStopRouter);
app.use('/api/busarrival', busArrivalRouter);

app.get('/api', (_req, res) => {
    res.send("Bus App Api")
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});