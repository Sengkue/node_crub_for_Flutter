const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors");
const router = require("../src/routes/index");
const dbConnection = require("../src/dbconnection");

startServer = () => {
  app.use(cors());

  dbConnection();
  app.use(express.json());

 // app.get("/", (req, res) => {
    // console.log('hello world')
    // res.status(200).json(req.body);

  //   const bunsuk = req.body.bunsuk;
  //   const tuakhunk = req.body.tuakhunk;

  //   var result = "";

  //   z;

  //   for (var i = 1; i <= tuakhunk; i++) {
  //     result = result + ", " + bunsuk + "x" + i + "=" + bunsuk * i;
  //   }
  //   res.status(200).json("result:" + result);
  // });

  // app.get('/user', (req, res)=>{
  //     console.log('hello world')
  //     res.status(200).json(req.query.name);
  // });

  // app.get('/user/:id', (req, res)=>{
  //     console.log('hello world')
  //     res.status(200).json(req.params.id);
  // });

  app.use('/v0/api',router);

  app.listen(8000, () => {
    console.log("server is listining port 8000");
  });
};

startServer();
