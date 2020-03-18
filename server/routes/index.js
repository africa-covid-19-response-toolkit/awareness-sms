var express = require('express');
var router = express.Router();
let sendSms = require('../utils/sms-sender');
let fetchSMS = require('../utils/fetch-sms');


/* GET home page. */
router.get('/', async (req,res,next) => {
    let sms_list = await fetchSMS();

    res.json(sms_list);
})

router.post('/sendsms', async (req, res, next) => {
    const options = {
        to: req.body.to,
        message: req.body.message,
        from: '6221'
    }
    let r = await sendSms(options);
    console.log(r);
//   res.render('index', { title: 'Express' });
    res.json({"meessage": r});
});

module.exports = router;
