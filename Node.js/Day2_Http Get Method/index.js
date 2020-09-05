const  express=require ('express');
const bodyParser =require ('body-parser');


const app= express();
app.use(bodyParser.json())

// app.get('/', (request, response, next) =>{
//     response.json ({
//         name:"todo-api",
//         version:"1.0.0"
//     });
// });

//read from users.json in url(localhost:1234/users)
//All users
app.get('/users',(request,response,next) => {
    const usersJson=require('./users.json');
    // console.log(usersJson)
    response.json(usersJson)
});

//specific user
app.get('/users/:userId',(request,response,next) => {
    // console.log(request.params)
    const userId=+request.params.userId;
    // console.log(userId)
    const usersJson=require('./users.json');
    const requestedUser =usersJson.find(user =>user.id ===userId);
    // console.log(requestedUser)

    if(!requestedUser) {
        response.json({
            message:'canot find the user with id'
        })
    }
    response.json(requestedUser)
});


app.listen(1234 ,() =>{
    console.log('Listening on port 1234')
})