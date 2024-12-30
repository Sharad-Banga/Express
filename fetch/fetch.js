
async function main(){
   const f =  await fetch("https://jsonplaceholder.typicode.com/posts/1" ,{
    method:"PUT"
   });
   const res = await f.json();
   console.log(res.userId);
   
}

main();

//check chatgpt to get header , body 
