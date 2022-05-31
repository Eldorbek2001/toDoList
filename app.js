// JShint esversion6


const express = require("express");
const bodyParser = require("body-parser");
const app =  express();
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"));
app.set('view engine', 'ejs');
var todoList = [];

app.get("/", function(req, res){
  var data = new Date();

  const monthNames = ["January", "February", "March",
                      "April", "May", "June",
                      "July", "August", "September",
                       "October", "November", "December"];
  let month = monthNames[data.getMonth()];
res.render('list', {
  month : month,
  day : data.getDate(),
  year : data.getFullYear(),
  todoList : todoList
});
})


app.post("/", function(req, res){
  var newItem = req.body.newTodoItem;
  if(newItem.length>0){
  todoList.push(newItem);
  }
    res.redirect("/");
})


app.listen(3000, function(){
  console.log("Listening to port 3000")
})
