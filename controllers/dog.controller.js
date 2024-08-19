const Dog=require("../models/dog.js");

// Index for Dogs
const index= async (req, res)=> {
  try {
    const allDogs=await Dog.find({});
    res.status(200).json(allDogs);
  } catch(err) {
    res.status(500).json({err: err.message});
  }
};

// Show for Dogs
const show=async (req, res) => {
  try {
    const {id}=req.params;
    const dog=await Dog.findById(id);
    
    // if dog does not exist
    if(!dog) {
        res.status(404).json({message: "Cannot find dog"});
    } 
    else {
      res.status(200).json(dog);
    }

  } catch (err) {
    res.status(500).json({err: err.message});
  }
};

// Create for Dogs
const create=async (req, res)=> {
  try {
    const dog=await Dog.create(req.body);
    res.status(200).json(dog);
  } catch(err) {
    res.status(500).json({message: err.message});
  }
};

// Update for dogs
const update=async (req, res) => {
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
};

// Delete for dogs
const deleteOne=async (req, res) => {
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
};

module.exports={index, show, create, update, deleteOne};