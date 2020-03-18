const Keys = require('../config/constants');

const AfriTalkOptions = {
    apiKey: Keys.apiKey,         // use your sandbox app API key for development in the test environment
    username: Keys.username,      // use 'sandbox' for development in the test environment
};

const africastalking = require('africastalking')(AfriTalkOptions);

sms = africastalking.SMS

const sendSMS = async (options)=> {
    let response = await sms.send(options);

    return response;
}

module.exports = sendSMS;