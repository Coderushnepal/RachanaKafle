const  express=require ('express');
const bodyParser =require ('body-parser');
const { response } = require('express');


const app= express();
app.use(bodyParser.json());


const isValidToken =(token) => {
    return true;
}

const function1=(request,response,next) => {
    const requestBody=request.body;
    // console.log(requestBody)

    if(!requestBody.id || requestBody.firstName || requestBody.lastName) {
        MessageChannel.json({
            message:"Invalid arguments"
        });
    }
    

if(!requestBody.token) {
    response.json({
        message:"Token is required"
    });
}

const isValid =isValidToken(requestBody.token);

if(!isValid) {
    response.json({
        message:"Token is not valid"
    });
}

request.body.isSuccessfullyVerified=true;
next();
    
}


const function2= (request, response, next) =>{
    response.json ({
        name:"todo-api",
        version:"1.0.0"
    });
}
app.post('/',function1,function2)
// app.get('/',function1,function2)

app.listen(1234 ,() =>{
    console.log('Listening on port 1234')
})