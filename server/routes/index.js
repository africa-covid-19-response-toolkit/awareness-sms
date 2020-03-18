var express = require('express');
var router = express.Router();
let sendSms = require('../utils/sms-sender');


/* GET home page. */
router.post('/sendsms', async (req, res, next) => {
    const options = {
        to: req.body.to,
        message: req.body.message,
        from: req.body.from
    }
    let r = await sendSms(options);
    console.log(r);
//   res.render('index', { title: 'Express' });
    res.json({"meessage": r});
});






module.exports = router;
