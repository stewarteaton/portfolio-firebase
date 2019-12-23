// for env variables
require('dotenv').config()

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');


admin.initializeApp();

const express = require('express');
const app = express();

// for request headers
const cors = require('cors');
app.use(cors());



// Function to send message from Contact Form 
app.post('/send', (req, res) => {

    // check valid email
    const isEmail = (email) => {
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(req.body.email.match(regEx)) return true
            else false;
    }

    // to prevent spam emails
    if(req.body.message.length < 18  || !isEmail(req.body.email)) {
        console.log('MESSAGE BLOCKED');
        return error;
    } else {

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        });


        // setup email data with unicode symbols
        let mailOptions = {
            from: req.body.email, 
            to:  process.env.EMAIL, 
            subject:  'Stews Website Contact Form', 
            html: 'From: ' + req.body.email + '<br/>Name: '+ req.body.name +'<br/><br/>' + req.body.message, 
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            return res.json({message: 'Email successfully sent'});
        });

    }
});


// https://baseurl.com/api/

exports.api = functions.https.onRequest(app); 