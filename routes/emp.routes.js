var express = require('express');
var router = express.Router();
const empcontroller=require('../controller/emp.controller');

/* GET home page. */
router.get('/',empcontroller.getAll);
router.post('/new',empcontroller.createUser);

module.exports = router;
