const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require('request');
const path = require('path');

const emailUtilMailGun = require('./email-mailgun');
const { sendEmail } = emailUtilMailGun;

//NO FILTER added as we want to apply this function 
//on all incoming requests
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Get our API routes
const api = require('./server/api');

// Set our api routes
//app.use('/api', api);








app.post('/api/mail', async (req, res, next) => {
    const recipient = req.body.to;
    const subject = req.body.subject;
    const message = {} ;
    message.text = req.body.body;
    console.log('request body', req.body);

    try {
        await sendEmail(recipient,subject, message);
        res.json({ message: 'Your query has been sent' });
        await next();
    } catch (e) {
        await next(e);
    }

    //res.json({message: 'Your query has been sent'});
});

// // // Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist/email-angular2-nodejs')));

// //Catch all other routes and return the index file
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname , 'dist/email-angular2-nodejs/index.html'));
// });
module.exports = app;
