const express = require('express');
const cookieparser = require('cookie-parser');
const session = require('./middleware/session');
const flash = require('./middleware/flash');
const auth = require('./middleware/auth');
const user = require('./middleware/user')

const suggestionController = require('./controllers/suggestion');
const mainController = require('./controllers/main');

const server = express();

server.set('view engine','pug');
server.use(express.static('public'));
server.use(express.urlencoded({extended: true}));
server.use(cookieparser());
server.use(session);
server.use(flash);
server.use(user);

server.get('/',mainController.showMain);

server.post('/',mainController.login); 

server.use(auth);


server.get('/suggestions',suggestionController.showSuggestions);

server.post('/suggestions',suggestionController.createSuggestion);


server.get('/suggestions/:id',suggestionController.showSuggestion);

server.post('/suggestions/:id',suggestionController.toggleVote);



server.listen(4342, 'localhost', () => console.log('Server load'));


// const server = http.createServer();

// server.on('request',(req,res) => {
// 	console.log(req.method);
// 	console.log(req.url);
// 	console.log(req.headers);

// 	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
// 	res.end(`
// 		<h1>Здарова</h1>
// 	`);
// });

//server.listen(4342, '127.0.0.1', () => console.log('Server load'));

