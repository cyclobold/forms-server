const express = require("express");
const cors = require("cors");
const server = express();
const bodyParser = require("body-parser");
const PORT = 4000 || 4111 || 5000;

//middleware
server.use(cors());
server.use(express.json())

server.use(bodyParser.urlencoded({extended: true}));




//Routes
server.get("/", function(request, response){

    response.send("Hello")
})

server.get("/about-us", function(request, response){

    response.send("This is about us");
})

//Contact Us
server.get("/contact-us", function(request, response){

    response.send("Contact Us Page");

})

server.post("/create-user", function(request, response){
    
    console.log(request.body)

    let username = request.body.username;
    let password = request.body.password;

    if(username != 'jamesuser' || password !='password'){
        response.send({
            message: "Invalid credentials",
            code: "error",
            data: {
                username: username,
                password: password
            }
        });
    }else{
        response.send({
            message: "User created successfully",
            code: "success",
            data: {
                username: username,
                password: password
            }
        });
    }
    


    

})


//Listen
server.listen(PORT, function(){
    console.log('Server is working')
})










