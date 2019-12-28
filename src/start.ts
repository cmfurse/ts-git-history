import ApiServer from './ApiServer';
import { SERVER_PORT } from './config';
import * as dotenv from 'dotenv';

dotenv.config();

const exampleServer = new ApiServer();

exampleServer.start(SERVER_PORT);
