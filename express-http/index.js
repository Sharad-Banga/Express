//creating http server
//express
// node default lib => no : it is external

const express = require('express');
const app = express();

function sum(n){
  let ans=0;
  for(let i=0; i<n;i++){
    ans+=i;
  }
  return ans;
}

app.get('/',(req,res)=>{

  let n = req.query.n;
  let summ = sum(n);
  res.send("hello"+summ)

});

app.listen(3000);