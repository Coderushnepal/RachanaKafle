
import express from 'express';
import bodyParser from 'body-parser';

import routes from './src/routes';

//Middleware
const loggingMiddleware = (req, res, next) => {
    const url = req.url;
    const method = req.method;
    
    console.log(`[ ${new Date().toISOString()} ] [ ${method} ] ${url}\n`);
  
    next();
  }

const app= express();
app.use(bodyParser.json())
app.use(loggingMiddleware);
app.use(routes)


app.listen(8848,() =>{
    console.log('Listening on port 7000 ')
})
process.on('uncaughtException', err => {
console.log('Uncaught exception', err);
  
  process.exit(1);
  });