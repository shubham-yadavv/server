const express = require('express');
const mongoose = require('mongoose');
const postRouter = require("./routes/postRoutes.js");
const userRouter = require("./routes/userRoutes.js");

const app = express()

const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_IP,
    MONGO_PORT,
   
  } = require("./config/config");

app.get('/', (req, res)=>{
    res.send("hello dgafrom docker1!")
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

app.use(express.json());


app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('server running at port 3000')
});
