const express = require('express');

const app = new express();

let users = [

  {
    uname:"sharad",
    kidneys:
      [
        {healthy:false},
      {healthy:true}
      ]
    
  }


]
app.use(express.json());//middleware
app.get('/',(req,res)=>{
    let totalK = users[0].kidneys;
    let j = totalK.length;
    

    let h = 0;
    let uh = 0;

    for(let i=0;i<j;i++){
        if(totalK[i].healthy==false) uh++;
        else h++;

    }
    // res.send("total kidneys : "+j+" healthy :"+h+" unhealthy :"+uh);
    res.send(`Total kidneys: ${j}, Healthy: ${h}, Unhealthy: ${uh}`);

})

app.post('/',(req,res)=>{
  console.log(req.body);
  const { isHealthy } = req.body;
    let totalK = users[0].kidneys;
    totalK.push({healthy:isHealthy});
    res.json({
      msg:"doneeee"
    })
})

app.put('/',(req,res)=>{

  const totalk = users[0].kidneys;
  for(let i=0;i<totalk.length ;i++){
      totalk[0].healthy = true;
  }
  res.json({
    msg:"doneeee"
  })
})



app.listen(3000)
