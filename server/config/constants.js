// const apiKey = "fb865659e7d2317ce77826054e66f4c0f58b892a4de659c0ec3d067f75b974fc";
// const username = "robgogo";
const dotenv = require('dotenv');

dotenv.config({path: 'server/.env'});

const Keys = {
    apiKey: process.env.APIKEY,
    username: process.env.USER
};

module.exports = Keys;