const express = require('express');
const pg = require('pg');
const app = express();

app.get('/', (req, res) => {

    // // postgres 컨테이너에 app_db라는 도메인으로 접근 할수 있게 docker-compose에서 연결해준다.
    // const conString = "postgres://postgres:1234@app_db:5432/docker_tutorial";
    // const results = [];

    var client = new pg.Client(conString);
    client.connect(function (err) {
        const results = [];
        res.send("ddd")
        // const query = client.query('SELECT * FROM car');

        // query.on('row', (row) => {
        //     results.push(row);
        // });

        // query.on('end', () => {
        //     client.end();
        //     return res.json(results);
        // });
    });
});

app.listen(3000, function () {
    console.log('test server listening on port 3000');
});