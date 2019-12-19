const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
   sgMail.send({
      to: email,
      from: 'myself.ronin@hotmail.com',
      subject: 'Thanks for joining in!',
      text: `Welcome to Task Manage App, ${name}. Let me know how youo get along with the app.`
   })
};

const sendCancellationEmail = (email, name) => {
   sgMail.send({
      to: email,
      from: 'myself.ronin@hotmail.com',
      subject: 'Your account has been cancelled',
      text: `Hello ${name}. It seems that you have cancelled your account with us. Is there any inconvenience with our services? Please let us know`
   })
};

module.exports = {
  sendWelcomeEmail,
   sendCancellationEmail
};

