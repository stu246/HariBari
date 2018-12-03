const express = require('express')
const app = express()
const port = 80


app.get('/keepalive', function (req, res) {
  res.send('alive');
});

/// TODO: POST receive file from client.

/// TODO: RESTAPI Tasks

app.listen(port, () => console.log(`Example app listening on http://localhost:${port}`));