const express = require('express')
const app = express()
const port = 80


app.get('/keepalive', function (req, res) {
  res.send('alive');
});

/// TODO: POST receive file from client.
app.post('/missionOutput', function(req, res){

})

/// TODO: RESTAPI Tasks

// Kill agent
app.get('/killAgent/:agentId', function(req, res){
  res.send("Agent id is "+ req.params.agentId)
})

// DB queries
// Find all the missions in the DB
app.get('/getMissions', function(req, res){

})

//Find all the agents from the DB
app.get('/getAllAgents', function (req, res){

})




app.listen(port, () => console.log(`Example app listening on http://localhost:${port}`));