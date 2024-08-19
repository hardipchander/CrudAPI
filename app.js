const mongoose=require("mongoose");
const express=require("express");
const app=express();

const Dog=require("./models/dog.js");

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

// Set up middleware and routes
app.use(express.json());

// Homepage
app.get("/", (req, res)=> {
  res.send("<h1>Home Page to API</h1>");
});

// Index for Dogs
app.get("/api/dogs", async (req, res)=> {
  try {
    const allDogs=await Dog.find({});
    res.status(200).json(allDogs);
  } 
  catch(err) {
    res.status(500).json({err: err.message});
  }
});

// Show for Dogs
app.get("/api/dogs/:id", async (req, res) => {
  try {
    const {id}=req.params;
    const dog=await Dog.findById(id);
    res.status(200).json(dog);
  }
  catch (err) {
    res.status(500).json({err: err.message});
  }
})

// Create for Dogs 
app.post("/api/dogs", async (req, res)=> {
  try {
    const dog=await Dog.create(req.body);
    res.status(200).json(dog);
  } 
  catch(err) {
    res.status(500).json({message: err.message});
  }
});

// Update for dogs
app.put("/api/dogs/:id", async (req, res) => {
  try {
    const {id}=req.params;
    const dog=await Dog.findByIdAndUpdate(id, req.body);

    // If dog does not exist
    if(!dog) {
      return res.status(404).json({message: "Cannot find dog"});
    } 
    
    // Display the updated dog
    const updatedDog=await Dog.findById(id);
    res.status(200).json(updatedDog);

  } catch(err) {
    res.status(500).json({err: err.message});
  }
});

// Delete for dogs
app.delete("/api/dogs/:id", async (req, res) => {
  try {
    const {id}=req.params;
    const delDog=await Dog.findByIdAndDelete(id);

    // if dog does not exist
    if(!delDog) {
      return res.status(404).json({message: "Cannot find dog"});
    } 
    else {
      return res.status(300).redirect("/api/dogs");
    }

  } catch(err) {
    res.status(500).json({err: err.message});
  }
});