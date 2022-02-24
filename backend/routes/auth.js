const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const JWT_SECRET = "myNameIsD@iv$anshu"    //secret string used to verify the token
var fetchuser = require('../middleware/fetchuser')

//We are using routes in sepreate file so we need to use "route.post" instead of "app.post"
//Route 1 : cretate a user using POST "api/auth/createuser" 
router.post("/createuser",
  [
    //user validation "express-validator"
    body("name", "Please Enter valid name").isLength({ min: 5 }),
    body("email", "Please enter a valid email").isEmail(),
    body("password", "Your Password must be atleast 5 character ").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false
    //validation using express validator: if the request return error then it will return error with badrequest "400"
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }


    //check whether the user with this email exist already

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success, error: "Sorry the user with the same email already exist" });
      }
      //hashing password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
          //creating a new user based on userSchema
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
  //fetching user data by id from mongoDB
      const data = {
        user:{
          id : user.id
        }
      }
      //changing id into jwt token 
      const authtoken = jwt.sign(data, JWT_SECRET );

      success = true;
      res.json({success, authtoken})
      
      //sending response

      // res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

//Route 2 : authenticate a user using POST "api/auth/login" 
router.post("/login",
  [
    //user email check "express-validator"
    body("email", "Please enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
        //validation using express validator: if the request return error then it will return error with badrequest "400"
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body
      try {
        let user = await User.findOne({email})
        if(!user){
          success= false;
          return res.status(400).json({error : "Please Enter Your Correct Credentials"});
        }
        //comparing hasshed password from entered password
        const passwordCompare = await bcrypt.compare(password, user.password)
        if(!passwordCompare){
          success = false
          return res.status(400).json({success, error : "Please Enter Your COrrect Credentials"});
        }
        const data = {
          user:{
            id : user.id
          }
        }
        //changing id into jwt token 
        const authtoken = jwt.sign(data, JWT_SECRET );
        success = true
        res.json({success, authtoken})


      } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
      }
  })

//Route 3 : Get logged in user using POST "api/auth/getUser"    Login requires

router.post("/getUser",fetchuser,  async (req, res) => {

try {
  userID = req.user.id
  const user = await User.findById(userID).select("-password")
  res.send(user)
  
} catch (error) {
  console.error(error.message);
  res.status(500).send("Some error occured");
}



  })


module.exports = router;
