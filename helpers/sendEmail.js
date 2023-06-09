const nodemailer = require("nodemailer");

require("dotenv").config();

const { ETHEREAL_PASS, ETHEREAL_LOGIN } = process.env;

const nodemailerConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: ETHEREAL_LOGIN,
    pass: ETHEREAL_PASS,
  },
};

const sendEmail = async (data) => {
  const transport = nodemailer.createTransport(nodemailerConfig);
  const email = { ...data, from: ETHEREAL_LOGIN };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
