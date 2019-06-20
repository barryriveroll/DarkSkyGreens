"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "barrphitness@gmail.com",
      pass: "barr1234"
    }
  });

  var mailOptions = {
    from: "barrphitness@gmail.com",
    to: "barrphitness@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!"
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

main().catch(console.error);
