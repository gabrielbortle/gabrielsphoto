require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',  // Ensure these settings are correct
  port: 465,                   // Correct port for SSL
  secure: true,                // Ensure SSL is enabled
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "https://gabrielshoto.com", // Replace with your actual frontend URL
    "Access-Control-Allow-Methods": "OPTIONS, POST",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: headers,
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
      headers: headers,
    };
  }

  try {
    const {
      name,
      email,
      phone,
      services,
      customMessage,
      people,
      date,
      location,
      hear,
      instagram,
      message,
    } = JSON.parse(event.body);

    const mailOptions = {
      from: `Contact Form <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Services Interested: ${services}
        Custom Message: ${customMessage || 'N/A'}
        Number of People: ${people}
        Preferred Date: ${date}
        Location Idea: ${location || 'Not specified'}
        How They Heard About You: ${hear}
        Instagram Username: ${instagram}
        Additional Message: ${message || 'No additional message'}
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
      headers: headers,
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email', error }),
      headers: headers,
    };
  }
};
