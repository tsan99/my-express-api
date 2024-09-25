
const express = require('express');
const app = express();
const ipp = require('ipp');
const fs = require('fs');
var request = require('request');
const port = process.env.PORT || 3000;
 

// read file contents and count the bytes
const ratesBuffer = fs.readFileSync("test.txt");
// display buffer length
var buffLength = Buffer.byteLength(ratesBuffer);

/* app.get('/Printer/:IPAddress', (req, res) => {
  const ipAddress = req.params.IPAddress
  const httpMethod = "Get"
  const reqIP = req.ip
  console.log("IpAddress: " + ipAddress);
  console.log("HttpMethod: " + httpMethod); */



// try to post

/* request.post(
    'https://postman-echo.com/post',
    { json: { "hand": "wave" } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log('Post request response: ' + body);
          console.log(JSON.stringify(req.body))
        }
    });

  res.send("Your request was " + httpMethod + " , Printer IP target was " + ipAddress + ", your IP: " + reqIP);


//}); */

 
app.get('/', (req, res) => {
  res.send('Hi User, this is a test API, we have received your GET request ...the buffer length of ' + buffLength + 
    ' as retrieved from the rates pdf at ' + Date());
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});