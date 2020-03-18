const Keys = require('./server/config/constants');
console.log("Keys are",Keys);
const AfriTalkOptions = {
    apiKey: Keys.apiKey,         // use your sandbox app API key for development in the test environment
    username: Keys.username,      // use 'sandbox' for development in the test environment
};
const africastalking = require('africastalking')(AfriTalkOptions);

// Initialize a service e.g. SMS
sms = africastalking.SMS

// Use the service
const options = {
    to: ['+251911572482'],
    message: "I'm a lumberjack and its ok, I work all night and sleep all day"
}

// Send message and capture the response or error
sms.send(options)
    .then( response => {
        console.log(response);
    })
    .catch( error => {
        console.log(error);
    });
