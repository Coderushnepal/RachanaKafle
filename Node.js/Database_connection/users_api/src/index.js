
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './routes';
import genericErrorHandler from './middlewares/genericErrorHandler';



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
app.use(routes);
app.use(genericErrorHandler);

dotenv.config();

app.listen(process.env.PORT,() =>{
    console.log(`Listening on port ${process.env.PORT}`)
})
