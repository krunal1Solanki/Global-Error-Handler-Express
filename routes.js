const express = require('express')
const notFound = require('./utils/notFoundPage');
const {validateName} = require('./validators/testValidators');
const { syncFun, asyncFun } = require('./testController');
const router = express.Router()


router.get('/sync', syncFun);
router.get('/async',validateName, asyncFun);
router.all('*', notFound)

module.exports = router