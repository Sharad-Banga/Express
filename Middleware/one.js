//

const express = require('express');
const app = new express();

//middleware function
function checkAge(age){
    if(age>14){
      return true;
    }
    else{
      return false;
    }
}


app.get('/',(req,res)=>{
  if(checkAge(req.query.age)){
    res.send("ride booked")
  }
  else{
    res.send("not booked");
  }
})


app.listen(3000);