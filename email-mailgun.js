const emailConfig = require('./email-config')();
const mailgun = require('mailgun-js')(emailConfig);
exports.sendEmail = (recipient,subject, message, attachment) =>
  new Promise((resolve, reject) => {
    const data = {
      from: 'Imran Raza <simranraza@simranraza.co>',
      to: recipient,
      subject: subject,
      text: message.text,
      inline: attachment,
      html: message.html,
    };

    mailgun.messages().send(data, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });
