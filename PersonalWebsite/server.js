var mongoUtil = require( './mongoUtil' );
mongoUtil.connectToServer( function( err, client ) {
  if (err) console.log(err);
  
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
  app.use(express.static('public'));

  // body parser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  app.use('/', index);
  app.use('/api', tasks);

  app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
    next()
  })

  var http = require('http').Server(app);
  var io = require('socket.io')(http);

  io.on('connection', (socket) => {
      console.log('new connection is made');

      socket.on('join', function(data){
          //joining
          socket.join(data.room);
    
          console.log(data.user + 'joined the room : ' + data.room);
    
          socket.broadcast.to(data.room).emit('new user joined', {user:data.user, message:'has joined this room.'});
        });
    
        socket.on('message',function(data){
    
          io.in(data.room).emit('new message', {user:data.user, message:data.message});
        });
  });

  http.listen(port, function() {
      console.log('listening on localhost:3000');
  });
});