const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const index = require("./routers/index");
const tasks = require("./routers/tasks");
const port = 3000;

const app = express();
const cors = require("cors");
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// set static folder
app.use(express.static(path.join(__dirname, 'client')));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log('server started on port ' + port);
});