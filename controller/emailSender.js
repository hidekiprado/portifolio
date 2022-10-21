require("dotenv").config();
//email sender
const nodemailer = require("nodemailer");
//setting sender
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "portifolio.vinicius.prado@gmail.com",
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = (name, email, message) => {
  const mailOptions = {
    from: "portifolio.vinicius.prado@gmail.com",
    to: "1viniciusprado@gmail.com",
    subject: `From Portfolio - Name: ${name} Email: ${email}`,
    text: message,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendEmail;
