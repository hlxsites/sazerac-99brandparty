console.log('loading... mailgun bundle');
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const API_KEY = 'YOUR_API_KEY';
const DOMAIN = 'YOUR_DOMAIN_NAME';
const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: 'api', key: API_KEY });

const name = document.querySelector('#name').value;
const phone = document.querySelector('#phone').value;
const email = document.querySelector('#email').value;
const text = document.querySelector('#note').value;

const messageData = {
    from: name+' <'+email+'>',
    to: 'rliechti@adobe.com.com',
    subject: 'Contact form 99brandparty: '+name,
    text: 'phone: '+phone+' text: '+text,
};

client.messages.create(DOMAIN, messageData)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    });

console.log('loaded mailgun bundle');
