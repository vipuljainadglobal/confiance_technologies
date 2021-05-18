var http = require("http");
var express = require("express");
var cors = require("cors");
var path = require("path");
const connectdb = require("./db");
var bodyParser = require("body-parser");
var routes = require('./routes/index');
// const functions = require('firebase-functions');

const app = express();
app.server = http.createServer(app);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());



connectdb();

app.get('/checking', function (req, res) {
    res.send('okkkkkkkkkkk')
})

// app.use('/checking123', function (req, res) {
//     res.send('okkkkkkkkkkk')
// })


app.use('/', routes);

app.use('/' , express.static(path.join(__dirname,  'dist', 'confiance-technologies')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'confiance-technologies', 'index.html'));
})
const port = process.env.PORT || 3000;

app.server.listen(port);
// exports.app = functions.https.onRequest(app);

console.log(" Started on port :: * * " + port);
