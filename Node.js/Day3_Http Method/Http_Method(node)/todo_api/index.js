const fs=require("fs");
const  express=require ('express');
const bodyParser =require ('body-parser');

const app= express();
app.use(bodyParser.json())


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

//Post
app.post('/users', (request, response, next) => {
    const params = request.body;
  
    if(!params.firstName || !params.lastName || !params.phoneNumbers) {
      response.json({
        message: "Insufficient number of arguments supplied"
      });
    }
  
    if(!Array.isArray(params.phoneNumbers)) {
      response.json({
        message: "phoneNumbers should be an array"
      });
    }
  
    const usersJson = require('./users.json');
    const maxId = usersJson.reduce((acc, cur) => {
      return cur.id > acc ? cur.id : acc;
    }, 0);
  
    const updatedJson = [
      ...usersJson,
      {
        id: maxId + 1,
        ...params
      }
    ];
  
    fs.writeFileSync('./users.json', JSON.stringify(updatedJson, null, 2));
  
    response.json({
      message: "New user added successfully",
      data: {
        id: maxId + 1,
        ...params
      }
    });
  });

  //Delete

  app.delete('/users/:userId', (request, response, next) => {
    const userId = +request.params.userId;
    const usersJson = require("./users.json");
    const doesUserExist = usersJson.find(user => user.id === userId);
  
    if(!doesUserExist) {
      response.json({
        message: "Cannot find user with id " + userId
      })
    }

    const updatedUsersList = usersJson.filter(user => user.id !== userId);
    fs.writeFileSync('./users.json',JSON.stringify(updatedUsersList, null, 2));
    response.json({
      message: "Deleted user with id " + userId
    });
  })

//PUT Method
  app.put('/users/:userId', (request, response, next) => {
    const userId = +request.params.userId;
    const params = request.body;
  
    const usersJson = require('./users.json');
    const updatedJson = usersJson.map(user => {
      if(user.id === userId) {
        return {
          ...user,
          ...params
        };
      }
  
      return user;
    });
  
    fs.writeFileSync('./users.json', JSON.stringify(updatedJson, null, 2));
  
    response.json({
      message: "Updated user with id " + userId
    });
  });


app.listen(1234 ,() =>{
    console.log('Listening on port 1234')
})
