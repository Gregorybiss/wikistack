var express = require('express')
var app = express()
var morgan = require('morgan')
app.use(morgan("dev"));
const {db} = require('./models');

db.authenticate()
    .then(() => {
        console.log('connected to the database');
    })

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send('Hello World');
  });

const PORT = 3300;

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
});