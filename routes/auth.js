var express = require('express');
var router = express.Router();
const logincontroller=require('../controller/login.controller');
/* GET home page. */
router.post('/login',logincontroller.loginAuth);

module.exports = router;
