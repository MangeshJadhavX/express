//create a http server
//express library we can bring to the node packages to import our machine
// 1 : install express : npm install express

const express = require("express");

const app = express();

function sum(n) {
  let ans = 0;

  for (let i = 0; i < n; i++) {
    ans = ans + i;
  }

  return ans;
}

app.get("/", function (req, res) {
  const n = req.query.n;
  const ans = sum(n);  
  res.send("your answer is : "+ ans);
});

app.listen(3000);
