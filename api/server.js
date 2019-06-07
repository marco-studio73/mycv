//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/public/mycv'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/public/mycv/index.html'));
});

// Start the app by listening on the default Heroku port
module.exports = app;