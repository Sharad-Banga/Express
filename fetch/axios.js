const axios = require('axios');

async function main(){
  const f =  await axios.post("https://jsonplaceholder.typicode.com/posts/1" ,{
    headers:{
      "helloo":"d"
    }
  });
  console.log(f);
  
}

main();

//check chatgpt to get header , body 