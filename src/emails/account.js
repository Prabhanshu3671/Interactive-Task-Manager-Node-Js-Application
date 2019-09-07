const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'prabhanshujaiswal123@gmail.com',
    subject: 'Thanks for joining.',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
}

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'prabhanshujaiswal123@gmail.com',
    subject: 'Provide feedback',
    text: `Hello, Mr. ${name}. It was pleasure having you onboard. Please help us get better.`
  });
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}
