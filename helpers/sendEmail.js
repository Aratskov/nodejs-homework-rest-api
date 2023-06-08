const nodemailer = require("nodemailer");

require("dotenv").config();

const { ETHEREAL_PASS } = process.env;

const nodemailerConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "lucio.kunze90@ethereal.email",
    pass: ETHEREAL_PASS,
  },
};

const sendEmail = async (data) => {
  const transport = nodemailer.createTransport(nodemailerConfig);
  const email = { ...data, from: "lucio.kunze90@ethereal.email" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
