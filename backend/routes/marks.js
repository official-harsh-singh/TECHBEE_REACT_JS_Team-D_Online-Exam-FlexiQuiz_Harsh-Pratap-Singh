const express = require("express");
const router = express.Router();
const Marks = require("../models/Marks");
var fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require("express-validator");


//Route 1 : Get user marks using GET "api/marks/fetchallmarks" 
router.get("/fetchallmarks", fetchuser, async (req, res)=>{
    try {
        const marks = await Marks.find({user: req.user.id})
        res.json(marks)
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})
//Route 2 : add user marks using POST "api/marks/addmarks" 
router.post("/addmarks", fetchuser, [
    //user validation "express-validator"
    body("name", "Please Enter valid name").isLength({ min: 3 }),
  ], async (req, res)=>{
      try {
       
      const {name, marks } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note = new Marks({
            name, marks, user:req.user.id
    })
   const savedNote = await note.save()

    res.json(savedNote)
} catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
}
})
//Route 3 : update existing marks using POST "api/marks/updatemarks" 
router.put("/updatemarks/:id", fetchuser, async (req, res)=>{
const {name, marks} = req.body;
//create a new marks object
const newMarks = {};
if (marks){newMarks.marks = marks}

//Find the notes to be updated and upadate it
let mark = await Marks.findById(req.params.id)
if(!mark){return res.status(404).send("Not found")}
if (mark.user.toString() !== req.user.id){
    return res.status(401).send("Not Allowed")
}

mark = await Marks.findByIdAndUpdate(req.params.id, {$set: newMarks}, {new:true})
res.json({mark});
})

module.exports = router

