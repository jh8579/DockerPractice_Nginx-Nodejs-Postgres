const express = require('express');
const pg = require('pg');
const app = express();

app.get('/', (req, res) => {

    res.send("dd")
});

app.listen(3000, function () {
    console.log('test server listening on port 3000');
});