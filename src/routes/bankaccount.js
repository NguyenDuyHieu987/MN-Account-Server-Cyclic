const express = require('express');
const router = express.Router();

const bankaccountController = require('../app/controllers/BankAccountController');

// router.get('/:slug', tvController.detail);
router.get('/getallaccount', bankaccountController.getAllAccount);
router.get('/getdetailaccount', bankaccountController.getDetailAccount);
router.get('/searchaccount', bankaccountController.searchAccount);
router.get('/getnumberofaccount', bankaccountController.getNumberOfAccounts);
router.post('/addaccount', bankaccountController.addAccount);
router.post('/updateaccount', bankaccountController.updateAccount);
router.post('/removeaccount', bankaccountController.removeAccount);

module.exports = router;
