//create a memory hospital
// you need to create 4 routs 
// get :user can check how many kidney they have and this kidney is healthy or not
// post : user can add a kidney
// put :user can replace a kidney,and make it healthy
// delete : user can remove a kidney




const express = require("express");

const app = express();

const users =[{
    name : "john dev",
    kidney : [{
        Healthy : false,
    }] 
}];

app.get("/",function(req,res){
    //write logic here
    const johnKidney = users[0].kidney;
    
    const kidneyCount = johnKidney.length;
  
     let healthyKidney = 0;
     
  for(let i = 0 ; i < johnKidney.length;i++){
    if(johnKidney[i].Healthy){
        healthyKidney = healthyKidney + 1;
    }
  }

    const  unHealthyKidney = kidneyCount - healthyKidney;
res.json ({
    kidneyCount,
    healthyKidney,
    unHealthyKidney
})
   

    
})


app.listen(3001);
