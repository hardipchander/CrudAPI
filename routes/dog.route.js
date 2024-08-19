const express=require("express");
const router=express.Router();

const {index, show, create, update, deleteOne}=require("../controllers/dog.controller.js");

router.get("/", index);

router.get("/:id", show);
 
router.post("/", create);

router.put("/:id", update);

router.delete("/:id", deleteOne);

module.exports=router;