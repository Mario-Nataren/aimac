require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const log = console.log;
const PORT = 8080;
const path = require('path');

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'views','Contactanos.vue'));
});

app.listen(PORT, () => {
    log('serve is starting on PORT,',8080);
});
//step 1

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'test.nataren@gmail.com',
        pass: 'secury123'
        // user: process.env.PASSWORD,
        // pass: process.env.EMAL
    }
});

let mailOptions = {
    from: 'test.nataren@gmail.com',
    to: 'test.nataren@gmail.com',
    subject: 'Testing and testing',
    text: 'IT works'
};

//step 3

transporter.sendMail(mailOptions, function(err, data){
    if (err) {
        console.log('Error Occurs',err);
    }
    else {
        console.log('emal sent')
    }
});