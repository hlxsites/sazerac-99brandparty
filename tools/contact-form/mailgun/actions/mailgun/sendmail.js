// eslint-disable-next-line import/no-extraneous-dependencies
const formData = require('form-data');
// eslint-disable-next-line import/no-extraneous-dependencies
const Mailgun = require('mailgun.js');
// eslint-disable-next-line import/no-extraneous-dependencies
const fetch = require('node-fetch');

async function main(params) {
  let retStatus = 403;
  let returnVal = 'Forbidden';
  let sendMail = false;
  // eslint-disable-next-line no-underscore-dangle
  if (params.__ow_headers.referer && params.__ow_headers.referer.includes('99brandparty')) {
    retStatus = 200;
    returnVal = params;
    sendMail = true;
  }

  if (sendMail) {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const gfetch = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${params.GCAPTCHA_SECRET}&response=${params.token}&remoteip=${params.__ow_headers['x-envoy-external-address']}`, {
        method: 'POST',
      });
      const req = await gfetch.json();
      if (req.success) {
        const name = params.name || 'not set';
        const phone = params.phone || 'not set';
        const email = params.email || 'not set';
        const note = params.note || 'not set';
        returnVal = `${name}, ${phone}, ${email}, ${note}`;

        const DOMAIN = 'mg.99BrandParty.com';
        const mailgun = new Mailgun(formData);
        const client = mailgun.client({ username: 'api', key: params.MAILGUN_API_KEY });

        const messageData = {
          from: 'no-reply@mg.99brandparty.com',
          to: email,
          subject: 'Consumer Contact from 99Brandparty.com',
          text: `${name}, email: ${email}, phone: ${phone}. sent this note: ${note}`,
        };

        client.messages.create(DOMAIN, messageData)
          .then((res) => {
            returnVal = res;
            retStatus = 200;
          });
      } else {
        retStatus = 403;
        returnVal = req;
      }
    } catch (err) {
      retStatus = 500;
      returnVal = err;
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
