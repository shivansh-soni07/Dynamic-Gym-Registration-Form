const path = require('path');
const express = require('express');
const fs  = require('fs');
const nodemon = require('nodemon');
const { publicDecrypt } = require('crypto');
const app = express();
const port = 3000;

//express stuff

app.use('', express.static('static'))//for serving static files
app.use(express.urlencoded())


//pug specific stuff

app.set('view engine','pug')// Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //SET THE VIEWS DIRECTORY




//endpoints


app.get('/',(req , res)=>{
  const params = {}
  res.status(200).render('main.pug' , params);
})


app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    phone = req.body.num
    address = req.body.address
    weight = req.body.weight

    let outputToWrite = `the name of the client is ${name}, ${age} years old, phone number is ${phone}, residing at ${address}. weight of him/her: ${weight}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('main.pug', params);})



//START THE SERVER




app.listen(port,() => {
    console.log(`IT IS WORKING AT ${port}`);
  });
  

