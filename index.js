const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const UsersService = require('./UsersService');
const userService = new UsersService();



app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});

server.listen(3000, function(){
	console.log('Listening on *:3000');
});

//service for new user

	//listening for new user connection
	
io.on('connection', function(socket){
	


	//new user connection:
		
		//join user to service keeping users data
	
	io.on('join', function(name){
		
		userService.addUser({
			id: socket.id,
			name
		});
		
		io.emit('update', {
		users: userService.getAllUsers();
		});
	});
	
	io.on('disconnect', function(){
		userService.removeUser(socked.id);
		socket.broadcast.emit('update', {
			users: userService.getAllUsers();
		});
	});
	
	io.on('message', function(message){
		const {name} = userService.getUserById(socked.id);
		socket.broadcast.emit('message', {
			text: message.text,
			from: name
		});
	});

});





	