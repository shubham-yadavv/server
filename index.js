const express = require('express');
const app = express()

app.get('/', (req, res)=>{
    res.send("hello from docker1!")
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('server running at port 3000')
});
