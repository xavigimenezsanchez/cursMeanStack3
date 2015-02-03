var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var options = {
    root: __dirname + "/layouts"
};

app.use(bodyParser.json());
app.use("/api/missatges", require("./controllers/api/missatges"));


app.get('/', function(req, res, next) {
    
    res.sendFile("missatges.html", options);
});

app.listen(process.env.PORT, function() {
    console.log('Server listening on', process.env.PORT);
});

