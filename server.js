var express = require("express");
var bodyParser = require("body-parser");
var Missatge = require("./models/missatge");

var app = express();
app.use(bodyParser.json());

app.get("/api/missatges", function(req, res, next) {
    Missatge.find()
            .sort('-date')
            .exec(function(err, misstages) {
        if (err) {
            return next(err);
        }
        res.json(misstages);
    });
    
});

app.post("/api/missatges", function (req,res,next) {
    var missatge = new Missatge({
        username : req.body.username,
        body: req.body.body
    });
    missatge.save(function(err, missatge) {
        if (err) { return next(err) }
        res.status(201).json(missatge);
    });
});

app.get('/', function(req, res, next) {
    res.sendfile("layouts/missatges.html");
});

app.listen(process.env.PORT, function() {
    console.log('Server listening on', process.env.PORT);
});

