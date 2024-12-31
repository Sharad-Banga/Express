
const express = require('express');
const app = express();

const users = [];

let token = "";
function generateToken(){

    options=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];

    

    for(let i=0 ; i<32 ; i++){
      token += options[Math.floor(Math.random()*options.length)];
    }
}
app.use(express.json());

app.post("/signup",(req,res)=>{
  const username = req.body.username;
  const password = req.body.password;
  generateToken();
  users.push({
    username: username,
    password : password,
    token : token
  })
  token="";
  res.json({
    message : "you are signed in",
    user : users
  })
})

app.post("/signin",(req,res)=>{
  const username = req.body.username;
  const password = req.body.password;
  let tt = "";
  const ppresent = users.find((u) => u.username == username && u.password==password) ;
   


   if(ppresent){
    res.json({message : "Foundd  with token : ", token : ppresent.token})
   }
   else{
    res.json({message : "NOT FOUND..."})
   }


})


app.get('/me',(req,res)=>{
    // const t = req.header.Host;
    const t = req.headers['token'];
    let foundUser = null;
    // console.log(t);
    
    for(let i=0; i<users.length ;i++){
        if(users[i].token==t){
          foundUser = users[i];
        }
    }

    if(foundUser!=null){
      res.json({
        username : foundUser.username,
        password : foundUser.password
      })
    }
    else{
      res.json({
        message : "not foundd"
      })
    }
})












app.listen(3000);