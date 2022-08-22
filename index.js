const express = require('express');
const mongoose = require('mongoose');
const app = express()

const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_IP,
    MONGO_PORT,
   
  } = require("./config/config");

app.get('/', (req, res)=>{
    res.send("hello from docker1!")
});

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;


const connectWithRetry = () => {
  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("succesfully connected to DB"))
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('server running at port 3000')
});
