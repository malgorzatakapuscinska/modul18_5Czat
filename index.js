const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const UsersService = require('./UsersService');
const userService = new UsersService();



app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

server.listen(3000, function(){
	console.log('Listening on *:3000');
});

//service for new user

	//listening for new user connection
	
io.on('connection', function(socket){
	


	//new user connection:
		
		//join user to service keeping users data
	
	socket.on('join', function(name){
		console.log(name);
		userService.addUser({
			id: socket.id,
			name
		});
		
		io.emit('update', {
		users: userService.getAllUsers()
		});
	});
	
	socket.on('disconnect', () => {
		userService.removeUser(socket.id);
		socket.broadcast.emit('update', {
			users: userService.getAllUsers()
		});
		
	});
	
	socket.on('message', function(message){
		console.log(message);
		const {name} = userService.getUserById(socket.id);
		socket.broadcast.emit('message', {
			text: message.text,
			from: name
		});
	});

});





	