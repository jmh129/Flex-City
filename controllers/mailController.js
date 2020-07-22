const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');


router.post("/api/mail",(req,res) => {
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'flexcityfeedback@gmail.com',
            pass: 'FLEXCITY',
        },
        secure: true, // upgrades later with STARTTLS -- change this based on the PORT
    });
    const mailData = {
        from: "flexcityfeedback@gmail.com",
        to:"flexcityfeedback@gmail.com",
        subject: req.body.subject,
        text:"mail",
        html:`<p> ${req.body.text} </p>`
    };
    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.json({ message:"sent" });
    });

})
module.exports = router;