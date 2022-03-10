var express = require('express');
var path = require('path');
const { resourceLimits } = require('worker_threads');
var app = express();

app.use(express.static("public"));

app.get('/', function(req,res) {
    res.render('content');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(3000, () => {
    console.log('App listening on port 3000')
});