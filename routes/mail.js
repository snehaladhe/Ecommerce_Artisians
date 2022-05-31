const express = require("express");
const routes = express.Router();
const { sendMail } = require("../controllers/mail");
routes.post("/email", sendMail);

module.exports = routes;
