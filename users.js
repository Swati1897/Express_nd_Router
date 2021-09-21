const express = require('express');
const router = express.Router();

// const users =[{name:'ss', email:'ss@gmail.com'}]

const users =[{name:'ss', email:'ss@gmail.com', Phone_no:"2344556677", city:"nagpur"},{name:'aa', email:'aa@gmail.com',Phone_no:"9998877665",city:"pune"} ]


router.route('/').get( (req, res) =>{
   res.send(' your express Router ');
});


router.route('/users').get ((req, res) =>{
  res.status(200).json({ ok: true, users});
 });

 router.route('/user/:name').get((req,res)=> {
 const{ name } = req.params ;
  const users = users.fillter((user) =>user.name === name )[0];
     res.json({ok: true , users });
});


 router.route('/adduser').post((req, res) => {
  const {name, email, Phone_no, city} = req.body;
   if (name && email && Phone_no && city )
   {
    users.push({ name, email, Phone_no, city});
    res.json({ok:true , users});
   }
 });


  router.route('/').post((req, res) => {
   const {name, email,Phone_no, city} = req.body ;
  if (name && email && Phone_no && city)
  {
    users.push({ name, email,Phone_no, city});
    res.json({ok:true , users});
 }
 });
module.exports =  router;
