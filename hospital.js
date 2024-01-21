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
    kidney : {
        Healthy : false
    } 
}]


app.get("/",function(req,res){
    const johnKidney = users[0].kidney;  
    const numberOfKidney = johnKidney.length;  
    const numberOfHealthyKidney = 0;
    for(let i = 0;i < johnKidney.length;i++){
       if(johnKidney[i].Healthy){
        numberOfHealthyKidney = numberOfHealthyKidney + 1;
      }  
       const  = numberOfKidney - numberOfHealthyKidney;     
    }
   

    
   res.json({
    numberOfKidney,
    numberOfHealthyKidney,
    numberOfunHelthy
   })
})


app.listen(3001);
