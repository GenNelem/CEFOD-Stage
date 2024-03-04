// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware for parsing form data
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Serve static files from the public directory
// app.use(express.static('public'));

// // Define a POST route for handling form submissions
// app.post('/contact', (req, res) => {
//     // Retrieve form data from request body
//     const { name, email, message } = req.body;

//     // Create a transporter using nodemailer
//     const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: 'gennel1239@gmail.com',
//             pass: 'Koutou1006'
//         }
//     });

//     // Configure email data
//     const mailOptions = {
//         from: email,
//         to: 'gennel1239@gmail.com',
//         subject: 'New Contact Form Submission',
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//     };

//     // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             res.status(500).send('Something went wrong. Please try again later.');
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.send('Your message has been sent successfully!');
//         }
//     });
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
