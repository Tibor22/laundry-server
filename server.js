import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';
import laundryRouter from './routes/laundry.router.js';
import dryerRouter from './routes/dryer.router.js';
import { Server } from 'socket.io';
import http from 'http';

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: 'https://laundry-app-iota.vercel.app',
		methods: ['GET', 'POST', 'DELETE'],
	},
});

app.use('/laundries', laundryRouter);
app.use('/dryers', dryerRouter);

io.on('connection', (socket) => {
	console.log('SOCKET Connected:');
	socket.on('send_laundry_list', (waitingList) => {
		socket.broadcast.emit('receive_laundry_list', waitingList);
	});
	socket.on('send_dryer_list', (waitingList) => {
		socket.broadcast.emit('receive_dryer_list', waitingList);
	});
});

const portNumber = process.env.PORT || 3000;

server.listen(portNumber, () => {
	console.log(`listening on PORT:${portNumber}`);
});

export default app;
