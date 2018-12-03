var http = require('http');
const PORT = 80;
var fs = require('fs');
var fileName = "logme.log";


var express = require('express');
var path = require('path');
 var app = express();

function foo (params, data)
{
    var x = JSON.parse(params);
    
    
    var whoComp = "#################### \r\nnew call- \r\n "+"\r\n date:" +datetime +" \r\n IP: "+x.ip+" \r\n compname:"+x.compname +" \r\n DATA:\r\n"+ data+"\r\n####################\r\n";
    console.log(whoComp);
      
    fs.appendFile(fileName, whoComp, function (err)
    {
    if (err) throw err;
    console.log('Updated!');
    fs.end;
    });
  
}


app.use(express.json());
app.use(express.static('public'));
//app.use(express.static(__dirname,'node_modules'));

app.post('/barak', function(request, response){
  var alertUs = request.body;
    console.log(alertUs);      // your JSON
   response.send(alertUs);    // echo the result back
   var datetime = new Date().toISOString();
   var whoComp = "#################### \r\nnew call- \r\n "+"\r\n date:" +datetime +" \r\n IP: "+alertUs.IP+" \r\n compname:"+alertUs.compName +" \r\n DATA:\r\n"+ alertUs.data+"\r\n####################\r\n";
   console.log(whoComp);
   fs.appendFile(fileName, whoComp, function (err)
   {
   if (err) throw err;
   console.log('Updated!');
   fs.end;
   });


});

app.get('/', function(req, res) {
    res.sendFile('sendData.html',{root: __dirname }); 
})

app.listen(PORT);

/*
app.use(express.bodyParser());

app.post('/', function(request, response){
console.log(request.body);      // your JSON
response.send(request.body);    // echo the result back
*/


/*
http.createServer(function (req, res) 
{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello barak & elad!');
    console.log(`Runnig on localhost:${PORT}`);

    fs.open(fileName, 'a', function (err) 
    {
        if (err) throw err;
        console.log('Saved!');
    });

    console.log(foo(`{"ip":"1.1.1.2","compname":"tsahi"}`,"i am data"));
    
}).listen(PORT);
*/

