const express = require('express');
var cors = require('cors');
var morgan = require('morgan');
// var bodyParser = require('body-parser');

const route = require('./Routes/index.js');

const app = express();
console.log(`STATIC: ${__dirname}/public`)
app.use(express.static(`${__dirname}/public`))

app.use(cors());
app.use(morgan('tiny'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});