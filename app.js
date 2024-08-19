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

// Set up middleware for request body
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/dogs", require("./routes/dog.route.js"));

// Homepage
app.get("/", (req, res)=> {
  res.status(200).json({message: "Welcome to Homepage"});
});