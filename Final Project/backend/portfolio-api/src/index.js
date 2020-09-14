import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes'
import logger from './utils/logger';

const server=express();
dotenv.config();
server.use(routes);

 //Middlewares
 server.use(bodyParser.json());
 server.listen(process.env.PORT,() => {
    logger.info(`Listening on port ${process.env.PORT}`)
 }) ;