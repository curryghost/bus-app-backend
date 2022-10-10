const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api', (_, res) => {
    res.send("This is Bus App express api server.");
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});