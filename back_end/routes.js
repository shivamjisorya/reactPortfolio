const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
let port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send_mail", async (req, res) => {
  console.log("API hitting");

  try {
    const { name, email, subject, message } = req.body;

    console.log(name, email, subject, message);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "sjisorya@gmail.com",
        pass: "mgmxmxkaytxzjrfe",  
      },
    });

    const mailOptions = {
      from: "sjisorya@gmail.com",
      to: "jisoryas26@gmail.com",
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const result = await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent: " + result.response);
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
