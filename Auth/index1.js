const express = require('express');
const app = express();

const jwt = require("jsonwebtoken");

app.use(express.json());

const JWT_SECRET = "sharad123";

const users = [];


//adding signup credentials into the array
app.post("/signup",(req,res)=>{
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username : username,
    password : password
  })

  //check if user is present or not
  res.json({
    message : "You are signed in"
  })

})



app.post("/signin",(req,res)=>{
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find((u)=>{
    if(u.username == username && u.password==password){
        return true;
    }
    else{
      return false;
    }
  })

  if(!foundUser){
    res.json({
      message:"credentials incorrect"
    })
  }
  else{
    
    const token = jwt.sign(foundUser.username ,JWT_SECRET);
    res.json({
      token : token
    })
  }


})

app.get("/me",(req,res)=>{

})


app.listen(3000);