const path = require('path');

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.listen(3030,()=>console.log('servidor andando'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'));
});

app.get('/hamilton',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/hamilton.html'));
});

app.get('/babbage',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/babbage.html'));
});