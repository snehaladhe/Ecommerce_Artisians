const nodemailer = require("nodemailer");
exports.sendMail = (req, res) => {
  console.log("req body", req.body);
  let Email = req.body.email;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const min = 1;
  const max = 1000000;
  const rand = min + Math.trunc(Math.random() * (max - min));

  var message = {
    from: process.env.EMAIL,
    to: Email,
    subject: "ORDER CONFIRMATION FROM ECOMMERCE-ARTISIANS",
    text: `YOUR ORDER HAS BEEN PLACED CONFIRM YOUR OTP ${rand}`,
  };
  transporter.sendMail(message, (err, info) => {
    if (err) {
      alert("err in sending mail", err);
      return res.status(400).json({
        message: `err in sending mail ${err}`,
      });
    } else {
      alert("successfuly mail sent", info);
      return res.json({
        message: info,
      });
    }
  });
};
