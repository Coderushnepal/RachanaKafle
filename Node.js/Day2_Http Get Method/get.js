const  express=require ('express');
const bodyParser =require ('body-parser');
const app= express();
app.use(bodyParser.json())

app.get('/', (request, response, next) =>{
    response.json ({
        name:"todo-api",
        version:"1.0.0"
    });
});

app.listen(1234 ,() =>{
    console.log('Listening on port 1234')
})