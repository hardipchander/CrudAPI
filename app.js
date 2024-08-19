const mongoose=require("mongoose");
const express=require("express");
const app=express();

const main= async () => {
  await mongoose.connect("mongodb://localhost:27017/demo");
};

// Connect to the database first and then start express server to listen to requests 
main().then(() => {
  console.log("Connected to database");
  app.listen(3000, ()=> {
    console.log("Listening for requests on http://localhost:3000");
  });

}).catch(err => {
  console.log("Could not connect to database",err);
})

// Homepage
app.get("/", (req, res)=> {
  res.send("<h1>Home Page to API</h1>");
});