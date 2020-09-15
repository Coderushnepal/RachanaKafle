import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes'
import logger from './utils/logger';
import genericErrorHandler from './middlewares/genericError Handler';


const server=express();
dotenv.config();


 //Middlewares
 server.use(bodyParser.json());
 server.use(routes);
 server.use(genericErrorHandler)

 server.listen(process.env.PORT,() => {
    logger.info(`Listening on port ${process.env.PORT}`);
 }) ;