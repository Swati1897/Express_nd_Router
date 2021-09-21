var express = require('express');
// const path = require('path')    ///
const bodyParser = require("body-parser");
const router = require('./Router/users')
const app = express();
//app.use(express.json());
const port= process.env.PORT|| 4041;

//app.use(express.static(path.join(__dirname, "static")))    ///

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());

 //
 /*
const users =[{name:'ss', email:'ss@gmail.com', Phone_no:"2344556677", city:"nagpur"},{name:'aa', email:'aa@gmail.com',Phone_no:"9998877665",city:"pune"} ]


   /*app.get('/', (req, res) =>{
   res.send('Hello World');
}); */   /// automatically server start 
/*
app.get('/users', (req, res) =>{
  res.status(200).json({ ok: true, users});
});

app.get('/user/:name', (req,res)=> {
  const{ name } = req.params ;
  const user = users.fillter((user) =>user.name === name )[0];
  res.json({ok: true , user });

});

app.post('/adduser',(req, res) => {
  const {name, email, Phone_no,city} = req.body;
  if (name && email && Phone_no && city)
  {
    users.push({ name, email, Phone_no, city});
    res.json({ok: true , user});

  }
}); */
app.use('/', router);

app.listen(port,() =>{
  console.log(`server is running on port:${port}`);
});
