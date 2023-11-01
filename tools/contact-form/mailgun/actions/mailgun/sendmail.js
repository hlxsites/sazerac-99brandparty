const formData = require('form-data');
const Mailgun = require('mailgun.js');

function main(params) {
  let retStatus = 403;
  let returnVal = 'Forbidden';
  let sendMail = false;
  // eslint-disable-next-line no-underscore-dangle
  // if (params.__ow_headers.referer && params.__ow_headers.referer.includes('99brandparty')) {
  retStatus = 200;
  returnVal = params;
  sendMail = true;
  // }

  if (sendMail) {
    try {
      const name = params.name || 'not set';
      const phone = params.phone || 'not set';
      const email = params.email || 'not set';
      const note = params.note || 'not set';
      returnVal = `${name}, ${phone}, ${email}, ${note}`;

      const DOMAIN = 'mg.99BrandParty.com';

      const mailgun = new Mailgun(formData);
      const client = mailgun.client({ username: 'api', key: params.MAILGUN_API_KEY });

      const messageData = {
        from: 'contact@mg.99BrandParty.com',
        to: 'rliechti@adobe.com',
        subject: `Contact on 99brandparty: ${name}`,
        text: `${name}, email: ${email}, phone: ${phone} sent a note: ${note}`,
      };

      client.messages.create(DOMAIN, messageData)
        .then((res) => {
          returnVal = res;
        })
        .catch((err) => {
          retStatus = 500;
          returnVal = err;
        });
    } catch (err) {
      retStatus = 500;
    }
  }

  return {
    statusCode: retStatus,
    body: {
      msg: returnVal,
    },
  };
}
exports.main = main;
