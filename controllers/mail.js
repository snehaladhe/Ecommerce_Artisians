const nodeMailer = require("nodemailer");
exports.sendMail = (req, res) => {
  console.log("req body", req.body);
  let Email = req.body.email;

  let transporter = nodeMailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  // const min = 1;
  // const max = 1000000;
  // const rand = min + Math.trunc(Math.random() * (max - min));
  var array = [
    893407, 920453, 467483, 326721, 127685, 674345, 976532, 182965, 564789,
    756978,
  ];
  var index = Math.floor(Math.random() * 10);
  var rand = array[index];

  var message = {
    from: process.env.EMAIL,
    to: Email,

    subject: "ORDER CONFIRMATION FROM ECOMMERCE-ARTISIANS",
    text: `YOUR ORDER HAS BEEN PLACED CONFIRM YOUR OTP ${rand}`,
  };
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("err in sending mail", err);
      return res.status(400).json({
        message: `err in sending mail ${err}`,
      });
    } else {
      console.log("successfuly mail sent", info);
      return res.json({
        message: info,
      });
    }
  });
};
