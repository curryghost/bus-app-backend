require('dotenv').config();
const express = require('express');
const app = express();
if (process.env.NODE_ENV == 'development') {
    const cors = require('cors');
    app.use(cors());
}
const busStopRouter = require('./routes/busStopsRoute');
const busArrivalRouter = require('./routes/busArrivalRoute');

app.use('/api/busstop', busStopRouter);
app.use('/api/busarrival', busArrivalRouter);

app.get('/api', (_req, res) => {
    res.send("Bus App Api")
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});