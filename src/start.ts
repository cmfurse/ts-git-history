import ApiServer from './ApiServer';
import * as dotenv from 'dotenv';

dotenv.config();

const port: number = parseInt(`${process.env.SERVER_PORT}`, 10) || 3000;
const exampleServer = new ApiServer();

exampleServer.start(port);
