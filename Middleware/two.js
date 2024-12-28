const express = require('express');
const app = new express();

function check(req,res,next){
  const n = req.query.n;
  if(n>14){
    next();
  }else{
    res.send("nooooo");
    
  }
}


app.get('/',check,(req,res)=>{
  
    res.send("ho gea bhai , jao ride kro");
})


app.listen(3000);