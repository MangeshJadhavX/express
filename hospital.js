//create a memory hospital
// you need to create 4 routs
// get :user can check how many kidney they have and this kidney is healthy or not
// post : user can add a kidney
// put :user can replace a kidney,and make it healthy
// delete : user can remove a kidney

const express = require("express");

const app = express();

const users = [
  {
    name: "john dev",
    kidney: [
      {
        Healthy: false,
      },
    ],
  },
];

app.use(express.json());

//the popular input type if you send get request is query parameter (?n=30);

app.get("/", function (req, res) {
  //write logic here
  const johnKidney = users[0].kidney;

  const kidneyCount = johnKidney.length;

  let healthyKidney = 0;

  for (let i = 0; i < johnKidney.length; i++) {
    if (johnKidney[i].Healthy) {
      healthyKidney = healthyKidney + 1;
    }
  }
  //the get request is const n = req.query.n; the input is shown in const n variable
  const unHealthyKidney = kidneyCount - healthyKidney;
  res.json({
    kidneyCount,
    healthyKidney,
    unHealthyKidney,
  });
});

//the popular input type if you send post request is using body
app.post("/", function (req, res) {
  //todo : this is not working we add one more line at 22
  const isHealthy = req.body.isHealthy; //you post like {isHealthy : true or False }
  users[0].kidney.push({
    Healthy: isHealthy,
  });

  res.json({
    msa: "done",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidney.length; i++) {
    users[0].kidney[i].Healthy = true;
  }

  res.json({
    msa: "remove unhealthy kidney",
  });
});

app.delete("/", function (req, res) {

    if(oneUnHealthyKidney()){
        const newKidneys = [];
        for (let i = 0; i < users[0].kidney.length; i++) {
          if (users[0].kidney[i].Healthy) {
            newKidneys.push({
              Healthy: true,
            });
          }
        }
        users[0].kidney = newKidneys;
      
        res.json({
          mes: " remove  all unhealthy",
        });
    } else {
        res.status(411).json({
            msg : "you have not a bad kidney"
        });
            
        
    }

  
  function oneUnHealthyKidney(){
     let unhealthy = false;
     for(let i = 0;i < users[0].kidney.length;i++){
        if(!users[0].kidney[i].Healthy){
            unhealthy = true;
        }
     }
     return unhealthy;
  }

});

//we can edit this more
app.listen(3001);


//!///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

